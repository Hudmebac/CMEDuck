
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, BookOpen, Music, Info } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="text-center py-16 bg-gradient-to-br from-background to-accent/10 rounded-lg shadow-xl overflow-hidden">
        <div className="relative z-10">
          <Image 
            src="https://picsum.photos/seed/heroDuckGuitar/300/300" 
            alt="CME Duck Hero" 
            width={180} 
            height={180} 
            className="mx-auto rounded-full mb-8 border-4 border-accent shadow-lg animate-fadeInScale"
            data-ai-hint="duck guitar"
          />
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 animate-slideUp">
            Welcome to <span className="text-accent">CME Duck</span> Adventures!
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Dive into the hilarious and insightful world of CME Duck as he navigates the complexities of modern technology, one quack at a time.
          </p>
          <div className="space-x-4 animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <Link href="/adventure-log">
              <Button size="lg" className="btn-custom">
                Explore Stories <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/jukebox">
              <Button size="lg" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                Tune into QuackBox <Music className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
        {/* Subtle background animation if desired */}
        {/* <div className="absolute inset-0 opacity-10 animate-pulse">
          <span className="absolute top-1/4 left-1/4 text-9xl">🦆</span>
          <span className="absolute bottom-1/4 right-1/4 text-9xl">⚙️</span>
        </div> */}
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <Link href="/adventure-log" className="block hover:scale-105 transition-transform duration-300">
          <Card className="card-base h-full group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <BookOpen className="h-8 w-8 text-secondary group-hover:animate-pulse" />
                <CardTitle className="text-2xl group-hover:text-secondary">Adventure Log</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Follow CME Duck's escapades in value streams, performance, security, and frameworks. Laugh and learn!
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/jukebox" className="block hover:scale-105 transition-transform duration-300">
          <Card className="card-base h-full group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Music className="h-8 w-8 text-secondary group-hover:animate-pulse" />
                <CardTitle className="text-2xl group-hover:text-secondary">QuackBox Jukebox</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Groove to royalty-free tracks and tech-themed parodies. Vote for your favorite tunes!
              </p>
            </CardContent>
          </Card>
        </Link>

        <Link href="/about" className="block hover:scale-105 transition-transform duration-300">
          <Card className="card-base h-full group">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Info className="h-8 w-8 text-secondary group-hover:animate-pulse" />
                <CardTitle className="text-2xl group-hover:text-secondary">About CME Duck</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover the legend of CME Duck and what the CME portfolio stands for.
              </p>
            </CardContent>
          </Card>
        </Link>
      </section>
      
      <style jsx>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeInScale {
          animation: fadeInScale 0.5s ease-out forwards;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slideUp {
          animation: slideUp 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
