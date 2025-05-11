'use client';

import { mockSongs } from '@/lib/data';
import { JukeboxClient } from '@/components/jukebox/jukebox-client';
import { Music } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';

const sentences = [
  "Quack ATTACK! Dip your beak into the splish-splashiest new jams bubbling up from our pond (and a few secret puddles beyond!). Which track makes your tail feathers do a happy dance?",
  "Waddle on over, little dippers! We're serving up the freshest, fluffiest beats, straight from our home puddle and the coolest creeks around! What's got your little webbed feet stomping? Tell us your top tune!",
  "Pond's Poppin'! Tune into the most quack-tastic beats rippling out from our lily pad HQ and beyond! What's your absolute fave splash hit? Don't be a shy duckling, tell us!",
  "Listen up, puddle jumpers! The Reed Radio is broadcasting the freshest rhythms from this side of the cattails and far-flung waters! Which melody makes you want to quack along the loudest?",
  "Quack & Groove! Dip your webbed toes into the freshest audio puddles from our patch and the wild blue yonder. What's got your feathers ruffling in rhythm?",
  "Puddle Stomp Central! We're slinging the slickest, splashiest sounds this side of the big oak, and even further! Which new tune is making your little webs tap the fastest?",
  "CME Duck FM is ON AIR! Transmitting the freshest quack-tunes and waddle-worthy waves from our cosy nest and the bustling brook beyond. Spill the seeds, what's your top track?",
  "Get ready for a feather-ruffling good time! We're dropping the bounciest beats from our watery wonderland and the coolest currents out there. Which one makes you wiggle your beak?",
  "Calling all adventurous audiophiles (the duckling kind)! We've paddled far and wide to bring you the freshest sonic splashes. What's your go-to jam for a big pond exploration?",
  "The Underground Quack Scene is bubbling! Catch the freshest, most unexpected beats, straight off the lily pad and from mysterious marshlands. Which beat is your secret obsession?",
  "Time for a sonic snack attack! We've got the freshest, most delicious beats on the menu, sourced from our pond and gourmet grooves from afar. What's your current ear-worm (the good kind!)?",
  "Yo, quackers! The pond's hottest sound waves are crashing in, plus some epic echoes from way beyond the reeds. Which one gets your quack of approval?",
  "Dive beak-first into a river of rhythm! We're serving up fresh currents of sound from our home pond and the wildest waters we could find. What's got you floating on cloud nine (or a comfy lily pad)!",
  "Got your waddle-phones ready? The freshest beats are dropping like breadcrumbs from the sky (and the coolest creeks)! What's the number one hit on your pond playlist?",
];

function getRandomSentence(): string {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  return sentences[randomIndex];
}

export default function JukeboxPage() {
  const [currentSentence, setCurrentSentence] = useState(getRandomSentence());
  // In a real app, you might fetch this data from an API
  const songs = mockSongs;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSentence(getRandomSentence());
    }, 60000); // Change sentence every 60 seconds (1 minute)

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div className="flex flex-col items-center space-y-8">
      <Image src="/images/Duck4.png" alt="CME Duck enjoying music" width={200} height={200} className="mx-auto" />
    <section className="text-center py-10">
        <Music className="mx-auto h-16 w-16 text-accent mb-4 animate-custom-bounce" />
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          QuackBox <span className="text-accent">Jukebox</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-4">
          {currentSentence}
        </p>
        <Button onClick={() => setCurrentSentence(getRandomSentence())} className="mb-8">
          Next Sentence
        </Button>
        <iframe src="https://suno.com/embed/17ae48c7-82ab-412e-8107-224f04226217" width="760" height="240"><a href="https://suno.com/song/17ae48c7-82ab-412e-8107-224f04226217">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/87a11a36-1991-46de-b6d2-40e4e5783463" width="760" height="240"><a href="https://suno.com/song/87a11a36-1991-46de-b6d2-40e4e5783463">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/e16e158c-e175-44ec-95fc-b220ff17fc59" width="760" height="240"><a href="https://suno.com/song/e16e158c-e175-44ec-95fc-b220ff17fc59">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/11770c68-a357-44e9-9bdc-84b410e93dda" width="760" height="240"><a href="https://suno.com/song/11770c68-a357-44e9-9bdc-84b410e93dda">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/b325f322-46d9-47b6-8153-1d4ba7cce8af" width="760" height="240"><a href="https://suno.com/song/b325f322-46d9-47b6-8153-1d4ba7cce8af">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/985ba613-8f15-42ae-b12d-fd8bbede030d" width="760" height="240"><a href="https://suno.com/song/985ba613-8f15-42ae-b12d-fd8bbede030d">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/b3fd9de3-9827-4e3e-9166-abf275e644b3" width="760" height="240"><a href="https://suno.com/song/b3fd9de3-9827-4e3e-9166-abf275e644b3">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/567ff170-1cc4-4645-80b6-8890d9510f4f" width="760" height="240"><a href="https://suno.com/song/567ff170-1cc4-4645-80b6-8890d9510f4f">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/3ad1c78a-944f-43b1-b63e-3e49b3fca229" width="760" height="240"><a href="https://suno.com/song/3ad1c78a-944f-43b1-b63e-3e49b3fca229">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/b949f1f9-1c4c-4e34-86c1-0b2d897921a4" width="760" height="240"><a href="https://suno.com/song/b949f1f9-1c4c-4e34-86c1-0b2d897921a4">Listen on Suno</a></iframe>
        <iframe src="https://suno.com/embed/eeaaabaa-91c4-47b9-85dd-c50edd5affdc" width="760" height="240"><a href="https://suno.com/song/eeaaabaa-91c4-47b9-85dd-c50edd5affdc">Listen on Suno</a></iframe>
 <iframe src="https://suno.com/embed/9b56ca8a-c125-4d70-830e-dc033fa067c9" width="760" height="240"><a href="https://suno.com/song/9b56ca8a-c125-4d70-830e-dc033fa067c9">Listen on Suno</a></iframe> 
 <iframe src="https://suno.com/embed/87e0fc80-2015-4c4e-b480-b4155e717750" width="760" height="240"><a href="https://suno.com/song/87e0fc80-2015-4c4e-b480-b4155e717750">Listen on Suno</a></iframe>
 <iframe src="https://suno.com/embed/1a2d590e-faf8-4e59-a118-91b89981d028" width="760" height="240"><a href="https://suno.com/song/1a2d590e-faf8-4e59-a118-91b89981d028">Listen on Suno</a></iframe>
      </section>
    </div>
  );
}


