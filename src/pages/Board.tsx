import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Thread from '@/components/Thread';
import PostForm from '@/components/PostForm';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Post {
  id: number;
  author: string;
  date: string;
  content: string;
  image?: string;
  replies?: number[];
}

const mockThreads: Post[] = [
  {
    id: 1001,
    author: 'Anonymous',
    date: '11/20/25(Wed)12:34:56',
    content: 'Welcome to this board! Post anything you want here.',
    image: '/placeholder.svg',
    replies: [1002, 1003],
  },
  {
    id: 1004,
    author: 'Anonymous',
    date: '11/20/25(Wed)13:45:23',
    content: 'Another thread for general discussion. What are you working on today?',
    replies: [1005],
  },
];

export default function Board() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  const [threads] = useState<Post[]>(mockThreads);
  const [replyTo, setReplyTo] = useState<number | undefined>();

  const handlePost = (data: { name: string; comment: string; file?: File }) => {
    console.log('New post:', data, 'Reply to:', replyTo);
    setReplyTo(undefined);
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
            <h1 className="text-xl font-bold">/{boardId}/</h1>
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
              onClick={() => navigate('/archive')}
              className="text-primary-foreground"
            >
              Archive
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
        <PostForm onSubmit={handlePost} replyTo={replyTo} />
        
        <div className="space-y-4">
          {threads.map((thread) => (
            <Thread key={thread.id} post={thread} onReply={setReplyTo} />
          ))}
        </div>
      </main>

      <footer className="bg-muted border-t-2 border-border p-4 text-center text-xs text-muted-foreground mt-8">
        <p>All trademarks and copyrights on this page are owned by their respective parties.</p>
      </footer>
    </div>
  );
}
