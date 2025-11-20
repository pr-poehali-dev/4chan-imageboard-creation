import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Report {
  id: number;
  postId: number;
  board: string;
  reason: string;
  status: 'pending' | 'resolved' | 'dismissed';
}

const mockReports: Report[] = [
  { id: 1, postId: 1234, board: 'b', reason: 'Spam', status: 'pending' },
  { id: 2, postId: 5678, board: 'g', reason: 'Off-topic', status: 'pending' },
  { id: 3, postId: 9012, board: 'v', reason: 'Duplicate', status: 'resolved' },
];

export default function Moderation() {
  const navigate = useNavigate();
  const [reports, setReports] = useState<Report[]>(mockReports);
  const [password, setPassword] = useState('');
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'admin') {
      setAuthenticated(true);
    }
  };

  const handleResolve = (id: number) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: 'resolved' } : r));
  };

  const handleDismiss = (id: number) => {
    setReports(reports.map(r => r.id === id ? { ...r, status: 'dismissed' } : r));
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-2 border-b-2 border-border">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate('/')}
              className="text-primary-foreground hover:bg-primary/80"
            >
              <Icon name="ArrowLeft" size={16} className="mr-1" />
              Back
            </Button>
            <h1 className="text-xl font-bold">Moderation</h1>
          </div>
          <nav className="flex gap-4 text-sm">
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/')}
              className="text-primary-foreground"
            >
              Home
            </Button>
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/faq')}
              className="text-primary-foreground"
            >
              FAQ
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl p-4">
        {!authenticated ? (
          <Card className="border-2 border-border bg-card p-6 max-w-md mx-auto mt-8">
            <h2 className="text-lg font-bold mb-4">Moderator Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Password</label>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter moderator password"
                />
              </div>
              <Button type="submit" className="w-full">
                Login
              </Button>
            </form>
          </Card>
        ) : (
          <>
            <Card className="border-2 border-border bg-muted p-4 mb-4">
              <h2 className="text-lg font-bold mb-2">Moderation Panel</h2>
              <p className="text-sm text-muted-foreground">
                Review reported posts and take action. All actions are logged.
              </p>
            </Card>

            <div className="space-y-2">
              {reports.map((report) => (
                <Card
                  key={report.id}
                  className="border border-border bg-card p-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-primary font-bold">/{report.board}/</span>
                      <span className="text-sm">Post #{report.postId}</span>
                      <span className="text-sm text-muted-foreground">{report.reason}</span>
                      <Badge
                        variant={
                          report.status === 'pending'
                            ? 'default'
                            : report.status === 'resolved'
                            ? 'secondary'
                            : 'outline'
                        }
                      >
                        {report.status}
                      </Badge>
                    </div>
                    {report.status === 'pending' && (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleResolve(report.id)}
                        >
                          <Icon name="Check" size={14} className="mr-1" />
                          Resolve
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDismiss(report.id)}
                        >
                          <Icon name="X" size={14} className="mr-1" />
                          Dismiss
                        </Button>
                      </div>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="bg-muted border-t-2 border-border p-4 text-center text-xs text-muted-foreground mt-8">
        <p>Moderation logs are maintained for transparency and accountability.</p>
      </footer>
    </div>
  );
}
