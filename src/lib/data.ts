import type { Story, Song } from './types';

export const mockStories: Story[] = [
  {
    id: '1',
    title: "CME Duck Optimizes the Unoptimizable Value Stream",
    thumbnailUrl: "https://picsum.photos/seed/story1/400/300",
    aiHint: "duck coding",
    category: "Value Streams",
    content: "Once upon a time, in a pond not so far away, CME Duck faced a gnarled value stream. It was slower than a snail in peanut butter! With a determined quack and a flurry of feathers, CME Duck dived in. He streamlined processes, automated tedious tasks (like fishing out soggy bread), and introduced agile water-sliding techniques. Soon, the value stream was flowing faster than a runaway rubber ducky in a bathtub! Our hero even implemented a new CI/CD pipeline (Continuous Integration/Continuous Dipping) that allowed for rapid iteration on pond features. The other ducks were amazed, chirping praises for CME Duck's innovative approach to optimizing their aquatic workflows.",
    quacks: 15,
  },
  {
    id: '2',
    title: "The Great Wall of Quack: Security Hardening Saga",
    thumbnailUrl: "https://picsum.photos/seed/story2/400/300",
    aiHint: "duck shield",
    category: "Security Hardening",
    content: "A shadowy figure, the Sly Fox, was trying to breach the Duck Pond's security. But CME Duck was ready! He rallied the ducks, built a formidable firewall of tightly woven reeds (multi-factor authentication, of course), and taught everyone about phishing scams (shiny lures with no worms). The pond was secure, and the Sly Fox retreated, muttering about 'pesky, security-conscious waterfowl.' CME Duck also introduced regular security audits, penetration testing (with friendly otters), and a 'See Something, Quack Something' policy, empowering every duck to be a part of the pond's defense.",
    quacks: 22,
  },
  {
    id: '3',
    title: "Framework Frenzy: CME Duck Implements Quack.js",
    thumbnailUrl: "https://picsum.photos/seed/story3/400/300",
    aiHint: "duck computer",
    category: "Framework Implementation",
    content: "The old Duck UI was clunky. It was time for an upgrade! CME Duck, after much research (and pecking at various tech blogs), decided on Quack.js, the latest JavaScript framework. There were challenges, a steep learning curve (some ducks tried to eat the documentation), but soon, the pond's interface was sleek, responsive, and full of delightful micro-interactions. Quacktastic! The new framework allowed for component-based development, making it easier to manage the pond's ever-growing list of features, from lily pad locators to weather-predicting algae.",
    quacks: 18,
  },
  {
    id: '4',
    title: "Performance Peak: CME Duck's Need for Speed",
    thumbnailUrl: "https://picsum.photos/seed/story4/400/300",
    aiHint: "duck rocket",
    category: "Performance Optimization",
    content: "The DuckBook social platform was lagging. Ducks couldn't share their breadcrumb finds fast enough! CME Duck, donning his performance-tuning goggles, identified bottlenecks, optimized image loading (lazy loading for underwater selfies!), and minified the pond's JavaScript. The result? Lightning-fast quacks and instant photo uploads. The ducks rejoiced, their digital social lives revitalized!",
    quacks: 30,
  }
];

export const mockSongs: Song[] = [
  {
    id: 's1',
    title: "The Ballad of the Agile Duck",
    artist: "The Webbed Wonders",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3", // Royalty-free example
    coverArtUrl: "https://picsum.photos/seed/song1/100/100",
    aiHint: "duck music",
    upvotes: 120,
    downvotes: 5,
  },
  {
    id: 's2',
    title: "Codebase Blues (Refactor Remix)",
    artist: "DJ Quacktastic",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3", // Royalty-free example
    coverArtUrl: "https://picsum.photos/seed/song2/100/100",
    aiHint: "duck dj",
    upvotes: 95,
    downvotes: 12,
  },
  {
    id: 's3',
    title: "Zero Downtime Dream",
    artist: "The Server Siders",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3", // Royalty-free example
    coverArtUrl: "https://picsum.photos/seed/song3/100/100",
    aiHint: "duck server",
    upvotes: 150,
    downvotes: 2,
  },
  {
    id: 's4',
    title: "Quack Attack (Techno Beat)",
    artist: "Anonymous Duck",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3", // Royalty-free example
    coverArtUrl: "https://picsum.photos/seed/song4/100/100",
    aiHint: "duck techno",
    upvotes: 70,
    downvotes: 20,
  },
];
