import type { Story, Song } from './types';
import { getRandomImageSrc } from './image-utils';

export const mockStories: Story[] = [
  {
    id: '1',
    title: "The Value Stream Quagmire",
    thumbnailUrl: '/images/explore.png',
    aiHint: "duck flowchart", 
    category: "Value Streams",
    content: "Log Entry: #001 - Operation: Streamline Sky Showtime\n\nThe new \"Sky Showtime\" feature, promising personalised recommendations across all Sky platforms, was stuck. Badly. It felt less like a stream and more like a stagnant pond. Handoffs between the UX team, backend devs, app integrators, and QA were taking weeks. Morale was dipping faster than a duck in a heatwave.\n\"This won't do!\" quacked CME Duck, waddling into the daily stand-up, a tiny whiteboard under his wing.\nHe drew a series of boxes: Idea -> Design -> Backend API -> Sky Q App -> Sky Glass App -> Sky Go App -> QA -> Release. Then, with a red marker, he circled the massive delays between each. \"Too many dams in our river of value!\" he declared.\nHis solution? A \"Quack-Sprint\" focused on parallel development and tighter feedback loops. He championed daily cross-functional sync-ups (the \"Duck Pond Huddle\") and helped automate the API contract testing, so app teams weren't waiting for \"perfect\" backend builds. He even helped the QA team build stubs for the new API components so they could start testing UIs much earlier.\nResult: The \"Sky Showtime\" feature, once bogged down, started flowing. Bottlenecks were unblocked, and the feature launched a week ahead of the revised schedule, much to the delight of Sky viewers eager for their next binge-watch. CME Duck celebrated with a well-deserved breadcrumb.",
    quacks: 0, // Initialize quacks to 0
  },
  {
    id: '2',
    title: "The Performance Plunge",
    thumbnailUrl: '/images/point.png',
    aiHint: "duck speed", 
    category: "Security Hardening",
    content: "Log Entry: #002 - The Case of the Lagging Listings\n\nThe Sky Q electronic programme guide (EPG) was acting sluggish. Users reported a frustrating delay when scrolling through channels, especially during peak evening hours. \"The dreaded spinning circle of doom!\" groaned a senior developer. \"Our performance metrics are taking a nosedive!\"\nCME Duck, equipped with his miniature profiler goggles, dove headfirst into the code. He waded through logs, traced requests, and meticulously analyzed database queries. \"Aha!\" he quacked, pointing a wing at a particularly complex SQL query responsible for fetching and filtering channel listings. \"It's an N+1 query disguised as a fluffy cloud! Every channel is doing an extra lookup for its 'Now & Next' info!\"\nHe quickly refactored the query, introducing a clever join that fetched all necessary data in one go. Then, he implemented a more aggressive caching strategy for the most frequently accessed EPG data.\nResult: The EPG became lightning fast. Scrolling was smooth, even during the Champions League final. Performance graphs soared, and CME Duck was hailed as the \"Feathered Speedster.\" He just puffed his chest and said, \"All in a day's work for a Sky developer!\"",
    quacks: 0, // Initialize quacks to 0
  },
  {
    id: '3',
    title: "The Security Scare",
    thumbnailUrl: '/images/CMEDuck.png',
    aiHint: "duck security", 
    category: "Framework Implementation",
    content: "Log Entry: #003 - Fortifying the Sky Kids Castle\n\nA routine security audit flagged a potential vulnerability in the authentication flow for the Sky Kids app. A clever (but thankfully, white-hat) hacker had found a way to potentially bypass a step if a specific, rare sequence of network interruptions occurred. While the risk was low, the team knew protecting their youngest users was paramount.\n\"Not on my watch!\" declared CME Duck, donning his tiny tinfoil hat (for \"thinking like a hacker\"). He meticulously reviewed the authentication token generation and validation logic. \"The state machine for session recovery... it has a tiny crack!\" he chirped.\nCME Duck proposed a more robust token validation sequence, adding an extra layer of server-side checks and a shorter expiry for partially authenticated sessions. He also championed the implementation of stricter input validation on all related API endpoints. He even waddled through a \"Threat Modeling\" session with the team, drawing out potential attack vectors with a tiny marker.\nResult: The vulnerability was patched, and the Sky Kids app's defenses were stronger than ever. The team breathed a collective sigh of relief. CME Duck just gave a stern, protective quack, \"Our little viewers must be kept safe!\"",
    quacks: 0, // Initialize quacks to 0
  },
  {
    id: '4',
    title: "The Framework Fumble",
    thumbnailUrl: '/images/cute.png',
    aiHint: "duck framework", 
    category: "Performance Optimization",
    content: "Log Entry: #004 - Navigating the New UI Nebula\n\nSky decided to adopt a new, cutting-edge JavaScript framework, \"SkyUI-NextGen,\" for rebuilding the My Sky customer portal. The initial transition was... messy. Components weren't rendering correctly, state management was a tangled web, and the team felt like they were coding in a different language every other day.\n\"This framework has great potential, but we're lost in its constellations!\" sighed a junior dev, staring at a screen full of cryptic error messages.\nCME Duck, ever the pragmatist, organized a series of \"Quack & Learn\" sessions. He built a small, elegant proof-of-concept module using SkyUI-NextGen, demonstrating best practices for component structure, data binding, and routing. He created a shared library of reusable \"DuckUtils\" (helper functions) tailored for the new framework, making common tasks simpler. He even set up a dedicated Slack channel, #skyui-nextgen-navigators, for quick questions and shared learnings.\nResult: Confidence in SkyUI-NextGen grew. The team, guided by CME Duck's examples and collaborative spirit, started building robust and beautiful new features for the My Sky portal. The initial fumble turned into a smooth flight. CME Duck just preened his feathers, \"New tools just need a little quack-tivation!\"",
    quacks: 0, // Initialize quacks to 0
  }
];

// Function to get a random image from the specified directory

export const mockSongs: Song[] = [
  {
    id: 's1',
    title: "The Ballad of the Agile Duck",
    artist: "The Webbed Wonders",
    audioSrc: "/music/SoundHelix-Song-1.mp3", 
    coverArtUrl: "/images/song_duck_music.png",
    aiHint: "duck music",
    upvotes: 120,
    downvotes: 5,
  },
  {
    id: 's2',
    title: "Codebase Blues (Refactor Remix)",
    artist: "DJ Quacktastic",
    audioSrc: "/music/SoundHelix-Song-2.mp3", 
    coverArtUrl: "/images/explore.png",
    aiHint: "duck studio",
    upvotes: 95,
    downvotes: 12,
  },
  {
    id: 's3',
    title: "Zero Downtime Dream",
    artist: "The Server Siders",
    audioSrc: "/music/SoundHelix-Song-3.mp3", 
    coverArtUrl: "/images/wave.png",
    aiHint: "duck stage",
    upvotes: 150,
    downvotes: 2,
  },
  {
    id: 's4',
    title: "Quack Attack (Techno Beat)",
    artist: "Anonymous Duck",
    audioSrc: "/music/SoundHelix-Song-4.mp3", 
    coverArtUrl: "/images/song_duck_techno.png",
    aiHint: "duck techno",
    upvotes: 70,
    downvotes: 20,
  },
];
