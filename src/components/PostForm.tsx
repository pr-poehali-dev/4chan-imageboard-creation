import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

interface PostFormProps {
  onSubmit: (data: { name: string; comment: string; file?: File }) => void;
  replyTo?: number;
}

export default function PostForm({ onSubmit, replyTo }: PostFormProps) {
  const [name, setName] = useState('Anonymous');
  const [comment, setComment] = useState('');
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ name, comment, file: file || undefined });
    setComment('');
    setFile(null);
  };

  return (
    <Card className="border-border bg-muted p-3 mb-4">
      <form onSubmit={handleSubmit} className="space-y-2">
        {replyTo && (
          <div className="text-sm text-muted-foreground">
            Replying to No.{replyTo}
          </div>
        )}
        <div className="grid grid-cols-2 gap-2">
          <Input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="text-sm h-8"
          />
          <div className="relative">
            <Input
              type="file"
              accept="image/*"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="text-xs h-8"
              id="file-upload"
            />
            {file && (
              <span className="absolute right-8 top-1 text-xs text-accent">
                <Icon name="Image" size={16} />
              </span>
            )}
          </div>
        </div>
        <Textarea
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="text-sm min-h-20 resize-none"
          required
        />
        <Button type="submit" size="sm" className="w-full">
          Post
        </Button>
      </form>
    </Card>
  );
}
