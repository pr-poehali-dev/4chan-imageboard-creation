import { useState } from 'react';
import { Card } from '@/components/ui/card';
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

interface ThreadProps {
  post: Post;
  onReply: (postId: number) => void;
}

export default function Thread({ post, onReply }: ThreadProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Card className="border-border bg-card p-2 mb-2">
      <div className="flex gap-2">
        {post.image && (
          <div className="flex-shrink-0">
            <img
              src={post.image}
              alt="Post attachment"
              className="w-32 h-32 object-cover border border-border cursor-pointer"
              onClick={() => setExpanded(!expanded)}
            />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-xs mb-1">
            <span className="font-bold text-accent">{post.author}</span>
            <span className="text-muted-foreground">{post.date}</span>
            <span className="text-muted-foreground">No.{post.id}</span>
            <Button
              variant="link"
              size="sm"
              className="h-auto p-0 text-xs"
              onClick={() => onReply(post.id)}
            >
              <Icon name="CornerUpLeft" size={12} className="mr-1" />
              Reply
            </Button>
          </div>
          <div className="text-sm whitespace-pre-wrap break-words">
            {post.content}
          </div>
          {post.replies && post.replies.length > 0 && (
            <div className="mt-2 text-xs text-muted-foreground">
              <Icon name="MessageSquare" size={12} className="inline mr-1" />
              {post.replies.length} {post.replies.length === 1 ? 'reply' : 'replies'}
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}
