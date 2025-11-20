import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const archivedThreads = [
  { id: 5001, board: 'b', title: 'Classic thread from 2024', date: '01/15/24', replies: 234 },
  { id: 5002, board: 'g', title: 'Old tech discussion', date: '02/20/24', replies: 156 },
  { id: 5003, board: 'v', title: 'Retro gaming memories', date: '03/10/24', replies: 89 },
  { id: 5004, board: 'a', title: 'Anime recommendations archive', date: '04/05/24', replies: 312 },
];

export default function Archive() {
  const navigate = useNavigate();

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
            <h1 className="text-xl font-bold">Archive</h1>
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
        <Card className="border-2 border-border bg-muted p-4 mb-4">
          <h2 className="text-lg font-bold mb-2">Archived Threads</h2>
          <p className="text-sm text-muted-foreground">
            Browse through archived discussions from all boards. Threads are automatically archived after 404 days.
          </p>
        </Card>

        <div className="space-y-2">
          {archivedThreads.map((thread) => (
            <Card
              key={thread.id}
              className="border border-border bg-card p-3 cursor-pointer hover:border-primary transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-primary font-bold">/{thread.board}/</span>
                  <span className="text-sm">No.{thread.id}</span>
                  <span className="text-sm">{thread.title}</span>
                </div>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>{thread.date}</span>
                  <span className="flex items-center gap-1">
                    <Icon name="MessageSquare" size={12} />
                    {thread.replies}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-muted border-t-2 border-border p-4 text-center text-xs text-muted-foreground mt-8">
        <p>Archive maintained automatically. Threads preserved for historical purposes.</p>
      </footer>
    </div>
  );
}
