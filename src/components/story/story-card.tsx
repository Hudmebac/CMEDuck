
import { RandomImage } from '@/components/image/random-image';
import Link from 'next/link';
import type { Story } from '@/lib/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ThumbsUp } from 'lucide-react'; // Using ThumbsUp as a proxy for Quack

interface StoryCardProps {
  story: Story;
}

export function StoryCard({ story }: StoryCardProps) {
  return (
    <Link href={`/adventure-log/${story.id}`} className="block group">
      <Card className="card-base h-full overflow-hidden transition-all duration-300 ease-in-out group-hover:shadow-2xl group-hover:-translate-y-1">
        <div className="aspect-[4/3] overflow-hidden">
          <RandomImage
            alt={story.title}
            src={story.thumbnailUrl}
            width={400} 
            height={300}
            className="object-contain w-full h-full transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={story.aiHint || "story thumbnail"}
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl line-clamp-2 group-hover:text-accent">{story.title}</CardTitle>
          <Badge variant="secondary" className="mt-2 bg-secondary/20 text-secondary-foreground border-secondary/50">{story.category}</Badge>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">
            {story.content.substring(0, 200) + '...'}
          </p>
        </CardContent>
        <CardFooter className="flex justify-between items-center text-sm text-muted-foreground">
          <span>Read More</span>
          <div className="flex items-center gap-1">
            <ThumbsUp className="h-4 w-4 text-accent" /> 
            <span>{story.quacks}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
