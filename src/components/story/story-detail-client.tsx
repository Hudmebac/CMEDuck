
"use client";

import type { Story } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ThumbsUp } from "lucide-react"; // Using ThumbsUp as proxy for Quack
import Image from "next/image";
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";
import { RandomImage } from "../image/random-image";

interface StoryDetailClientProps {
  story: Story;
}

export function StoryDetailClient({ story }: StoryDetailClientProps) {
  const { toast } = useToast();
  const [quacks, setQuacks] = useState(story.quacks);
  const [hasQuacked, setHasQuacked] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  useEffect(() => {
    setCurrentUrl(window.location.href);
    const quackedStatus = localStorage.getItem(`quacked_${story.id}`);
    if (quackedStatus === 'true') {
      setHasQuacked(true);
    }
  }, [story.id]);

  const handleQuack = () => {
    if (!hasQuacked) {
      setQuacks(quacks + 1);
      setHasQuacked(true);
      localStorage.setItem(`quacked_${story.id}`, 'true');
      toast({
        title: "Quacktastic!",
        description: "You've reacted to the story!",
        className: "bg-accent text-accent-foreground",
      });
      // Here you would typically also send an update to your backend
    } else {
      toast({
        title: "Already Quacked!",
        description: "You can only quack once per story.",
        variant: "destructive",
      });
    }
  };


  return (
    <div className="space-y-6">
      {/* Removed specific image rendering for story.id as RandomImage will be used */}
      <div className="flex justify-center my-4">
         <RandomImage
            alt={story.title + " illustration"}
            width={600}
            height={400}
            className="rounded-md shadow-lg object-contain"
            data-ai-hint={story.aiHint || "story illustration"}
          />
      </div>
      
      <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/50 text-sm px-3 py-1">
          Category: {story.category}
        </Badge>
        <div className="flex items-center gap-2 text-muted-foreground">
          <ThumbsUp className="h-5 w-5 text-accent" />
          <span>{quacks} Quacks</span>
        </div>
      </div>

      <article className="prose dark:prose-invert max-w-none text-lg text-foreground/80 whitespace-pre-wrap">
        {story.content}
      </article>

      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
        <Button onClick={handleQuack} disabled={hasQuacked} className="btn-custom w-full sm:w-auto">
          <ThumbsUp className="mr-2 h-5 w-5" /> {hasQuacked ? "Quacked!" : "Quack Reaction"}
        </Button>
      </div>
    </div>
  );
}
