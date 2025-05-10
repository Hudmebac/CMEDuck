"use client";

import type { Story } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ThumbsUp, Share2 } from "lucide-react"; // Using ThumbsUp as proxy for Quack
import Image from "next/image";
import { useState, useEffect } from "react";
import { Badge } from "../ui/badge";

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

  const handleShare = () => {
    navigator.clipboard.writeText(currentUrl).then(() => {
      toast({
        title: "Link Copied!",
        description: "Story link copied to clipboard.",
      });
    }).catch(err => {
      toast({
        title: "Failed to copy",
        description: "Could not copy link to clipboard.",
        variant: "destructive",
      });
    });
  };

  return (
    <div className="space-y-6">
      {story.id === '1' && (
        <Image
 src="/images/CMEDuck.png"
 alt="Story 1 illustration"
 width={600}
 height={400}
        />
      )}
      {story.id === '2' && (
        <Image
 src="/images/explore.png"
 alt="Story 2 illustration"
 width={600}
 height={400}
        />
      )}
      {story.id === '3' && (
        <Image
 src="/images/smile.png"
 alt="Story 3 illustration"
 width={600}
 height={400}
        />
      )}
      {story.id === '4' && (
        <Image
 src="/images/wave.png"
 alt="Story 4 illustration"
 width={600}
 height={400}
        />
      )}
 <div className="flex flex-wrap gap-4 items-center">
        <Badge variant="secondary" className="bg-secondary/20 text-secondary-foreground border-secondary/50 text-sm px-3 py-1">
          Category: {story.category}
        </Badge>
        <div className="flex items-center gap-2 text-muted-foreground">
          <ThumbsUp className="h-5 w-5 text-accent" />
          <span>{quacks} Quacks</span>
        </div>
      </div>

      <p className="text-lg text-foreground/80 whitespace-pre-wrap">
        {story.content}
      </p>

      <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t">
        <Button onClick={handleQuack} disabled={hasQuacked} className="btn-custom w-full sm:w-auto">
          <ThumbsUp className="mr-2 h-5 w-5" /> {hasQuacked ? "Quacked!" : "Quack Reaction"}
        </Button>
        <Button onClick={handleShare} variant="outline" className="w-full sm:w-auto btn-custom-outline">
          <Share2 className="mr-2 h-5 w-5" /> Share Story
        </Button>
      </div>
    </div>
  );
}
