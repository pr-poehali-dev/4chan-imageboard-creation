import { useNavigate } from 'react-router-dom';
import BoardList from '@/components/BoardList';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Index() {
  const navigate = useNavigate();

  const handleBoardSelect = (boardId: string) => {
    navigate(`/board/${boardId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground p-3 border-b-2 border-border">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold text-center mb-2">Imageboard</h1>
          <nav className="flex justify-center gap-6 text-sm">
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/archive')}
              className="text-primary-foreground"
            >
              <Icon name="Archive" size={14} className="mr-1" />
              Archive
            </Button>
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/faq')}
              className="text-primary-foreground"
            >
              <Icon name="CircleHelp" size={14} className="mr-1" />
              FAQ
            </Button>
            <Button
              variant="link"
              size="sm"
              onClick={() => navigate('/moderation')}
              className="text-primary-foreground"
            >
              <Icon name="Shield" size={14} className="mr-1" />
              Moderation
            </Button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2">Welcome</h2>
          <p className="text-muted-foreground">Select a board to start browsing and posting</p>
        </div>

        <BoardList onSelect={handleBoardSelect} />
      </main>

      <footer className="bg-muted border-t-2 border-border p-4 text-center text-xs text-muted-foreground mt-8">
        <p>Please read the rules before posting. Contact moderation if you have concerns.</p>
      </footer>
    </div>
  );
}
