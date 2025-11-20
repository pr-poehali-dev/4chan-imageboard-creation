import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface Board {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const boards: Board[] = [
  { id: 'b', name: 'Random', description: 'Random discussion', icon: 'Sparkles' },
  { id: 'g', name: 'Technology', description: 'Tech talk', icon: 'Cpu' },
  { id: 'v', name: 'Video Games', description: 'Gaming discussion', icon: 'Gamepad2' },
  { id: 'a', name: 'Anime', description: 'Anime & Manga', icon: 'Tv' },
  { id: 'pol', name: 'Politics', description: 'Political discussion', icon: 'Scale' },
  { id: 'fit', name: 'Fitness', description: 'Health & Fitness', icon: 'Dumbbell' },
];

interface BoardListProps {
  onSelect: (boardId: string) => void;
}

export default function BoardList({ onSelect }: BoardListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {boards.map((board) => (
        <Card
          key={board.id}
          className="border-2 border-border bg-card p-4 cursor-pointer hover:border-primary transition-colors"
          onClick={() => onSelect(board.id)}
        >
          <div className="flex items-start gap-3">
            <div className="text-primary">
              <Icon name={board.icon} size={32} />
            </div>
            <div>
              <h3 className="font-bold text-lg">/{board.id}/</h3>
              <h4 className="font-semibold text-sm">{board.name}</h4>
              <p className="text-xs text-muted-foreground mt-1">{board.description}</p>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
