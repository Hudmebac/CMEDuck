import type { Story, Song } from './types';

export const mockStories: Story[] = [
  {
    id: '1',
    title: "CME Duck Optimizes the Unoptimizable Value Stream (Now with More Coffee!)",
    thumbnailUrl: "/images/story_duck_coding.png",
    aiHint: "duck coding",
    category: "Value Streams",
    content: "Legend tells of a value stream so convoluted, it made a bowl of spaghetti look like a perfectly straight line. Senior devs spoke of 'The Monolith of Misery' in hushed, fearful tones. Enter CME Duck, armed with a rubber duck for debugging (himself, naturally – who else understands quack-driven development?) and an IV drip of artisanal coffee. He mapped the stream, uncovering more circular dependencies than a flock of ducks in a synchronized swimming routine gone wrong. 'This isn't a stream,' he quacked, flapping his wings in exasperation, 'it's a digital Bermuda Triangle where pull requests go to disappear!' With a heroic refactoring effort, fueled by an alarming number of energy drinks and the sheer power of will, CME Duck untangled the legacy code, introduced microservices (or 'micro-ponds,' as he affectionately called them), and automated the deployment pipeline until it purred like a contented kitten (a very large, server-sized kitten). The result? Value flowed smoother than a greased otter down a waterslide, and developers finally stopped offering sacrifices to the Git gods before every merge.",
    quacks: 175,
  },
  {
    id: '2',
    title: "The Great Wall of Quack: A Security Hardening Saga (Ft. The Sly Fox's Comeuppance)",
    thumbnailUrl: "/images/story_duck_shield.png",
    aiHint: "duck shield",
    category: "Security Hardening",
    content: "The Duck Pond's digital defenses were leakier than a rusty colander. The Sly Fox, a notorious black-hat hacker with a PhD in phishing (mostly disguised as irresistible 'free birdseed' offers), was sniffing around. CME Duck, channeling his inner cybersecurity guru (complete with a tinfoil hat for 'extra protection against rogue radio waves'), declared, 'This pond needs a pentest, stat! And possibly a moat filled with very grumpy geese.' He implemented WAF (Webbed Application Firewall) rules so strict they made airport security look lax, enforced MFA (Mandatory Feather Authentication – surprisingly effective), and ran company-wide training on spotting suspicious links. 'If it promises unlimited breadcrumbs,' he warned, 'it's probably malware wearing a very convincing trench coat!' He even set up a honeypot disguised as an unsecured API endpoint named 'Free_Secrets_And_Gossip.json'. The Sly Fox, drooling at the prospect, waltzed right in... and found himself rickrolled into an infinite loop, his console flashing 'Never Gonna Give You Up' in ASCII art. The pond was safe, and CME Duck became a legend, the feathered guardian against digital poultrygeist.",
    quacks: 250,
  },
  {
    id: '3',
    title: "Framework Frenzy: CME Duck Tackles Quack.js vNext (And Survives the Node_Modules Singularity)",
    thumbnailUrl: "/images/story_duck_thinking.png",
    aiHint: "duck thinking",
    category: "Framework Implementation",
    content: "The old Duck UI, built on 'DuckScript 1.0' (a language so ancient, its documentation was rumored to be chiseled on stone tablets), was causing more bugs than a picnic in a swamp. 'We need a modern solution!' CME Duck proclaimed, his eyes gleaming at the release notes for 'Quack.js vNext' – the JavaScript framework so hip, it wore tiny ironic sunglasses. It promised reactive state management, server-side rendering that was 'faster than a caffeinated cheetah,' and a learning curve 'gentle as a summer breeze' (the marketing department clearly never tried to configure Webpack). The migration was an epic saga. Breaking changes shattered developers' sanity, dependency hell threatened to create a node_modules black hole, and CME Duck seriously considered a career change to interpretive dance. But, fueled by stale pizza, an unhealthy amount of Stack Overflow, and the sheer audacity of hope, he persevered. Component by component, the legacy UI was dragged, kicking and screaming, into the 21st century. The new interface was so sleek and performant, users shed tears of joy (or maybe it was just allergies). Developer satisfaction (duck satisfaction?) skyrocketed, and CME Duck finally understood why they called it 'bleeding-edge' technology – mostly because he'd metaphorically bled all over it.",
    quacks: 200,
  },
  {
    id: '4',
    title: "Performance Peak: CME Duck's Cache Crusade (Or, How I Learned to Stop Worrying and Love the TTL)",
    thumbnailUrl: "/images/story_duck_microphone.png",
    aiHint: "duck microphone",
    category: "Performance Optimization",
    content: "The DuckBook social platform was so sluggish, users reported their status updates were arriving with a noticeable time delay... from the previous geological era. CME Duck, after a deep-dive into profiler reports that resembled an abstract expressionist painting of despair, pinpointed the culprit: database queries slower than a snail attempting to win a marathon. 'We need to cache ALL THE THINGS!' he declared, his voice echoing with the conviction of a prophet. He implemented Redis for session caching ('the memory of a goldfish, but, like, a SUPER fast goldfish!'), Varnish for HTTP caching (because serving the same page a million times from scratch is just silly), and a CDN for static assets (like duck selfies and cat videos... wait, how did those get in there?). He even optimized database indexes until they were sharper than a freshly-honed katana. The page load times plummeted from 'measure-it-with-a-calendar' to 'quicker-than-a-quack.' Ducks could now share their breadcrumb discoveries and hot takes on migratory patterns in glorious real-time. CME Duck, watching the server load graphs resemble a very relaxed, horizontal line, knew his caching crusade was a quacking triumph. He even got a tattoo: 'TTL: Just Right.'",
    quacks: 320,
  }
];

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
    coverArtUrl: "/images/song_duck_studio.png",
    aiHint: "duck studio",
    upvotes: 95,
    downvotes: 12,
  },
  {
    id: 's3',
    title: "Zero Downtime Dream",
    artist: "The Server Siders",
    audioSrc: "/music/SoundHelix-Song-3.mp3", 
    coverArtUrl: "/images/song_duck_stage.png",
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
