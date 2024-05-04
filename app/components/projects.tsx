import * as React from "react";
import Youtube from 'react-youtube';
import { Separator } from "@radix-ui/react-separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi
} from "../UI/carousel";

export const Projects: React.FC = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);

  const projects = [
    { 
      videoId: 'nu2ENwsWbus', 
      description: "My first Project ever made, took me 30 hours, but I learnt so much I don't regret a minute of it.",
      url: "https://github.com/LEWISpatrick/rolePlayingGame" 
    },
    { 
      videoId: 'r0l7gmDHG8g', 
      description: 'A detailed walkthrough of my first design of BusinessBrander, showcasing the Portal Page.',
      url: "https://example.com/project2"
    },
    { 
      videoId: 'CKkihprvKGk', 
      description: 'My first full stack React Application which was a social media page, go check it out.',
      url: "https://github.com/LEWISpatrick/instagram-X-react-project"
    },
    { 
      videoId: 'Y__NjGOyKKY', 
      description: 'My third project which was really focused on the backend side of things, Node.js, but it currently is not working.',
      url: "https://github.com/LEWISpatrick/AdonisQuote"
    },
    { 
      videoId: 'r8INyceAUP8', 
      description: 'The fifth project is the official Landing Page for BusinessBrander. Go check it out.',
      url: "https://github.com/LEWISpatrick/businessBrander_landing"
    }
  ];

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      controls: 0,
      rel: 0,
      showinfo: 0,
      mute: 1,
      loop: 100, // Set loop to 1
      start: 0,
      modestbranding: 1,
      width: 480,
      height: 270,
      playlist: '' // This will be dynamically set based on the videoId
    }
  };

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    const unsubscribe = api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
    return () => {
      unsubscribe();
    };
  }, [api]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-7xl lg:text-8xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-600 to-cyan-500"
          data-aos="fade-down">
        Projects
      </h1>
      <div className='flex items-center justify-center'>
        <Separator className='mt-3 bg-slate-100/20 h-1 w-80'/>
      </div>
      <div className="flex justify-center w-full mt-20">
        <Carousel setApi={setApi} className="w-full max-w-4xl">
          <CarouselContent>
            {projects.map((project, index) => (
              <CarouselItem key={index}>
                <div className="flex flex-col items-center justify-center aspect-video">
                  <Youtube opts={{...videoOptions, playerVars: {...videoOptions.playerVars, playlist: project.videoId}}} videoId={project.videoId} />
                  <p className="text-center text-xs md:text-sm mt-2 font-medium text-gray-700 dark:text-gray-300">
                    {project.description}
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="block mt-1 text-blue-600 hover:text-blue-800 visited:text-purple-600">
                      Visit Website/Github_Repo
                    </a>
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="py-2 text-xl mt-2">
        Slide {current} of {count}
      </div>
    </div>
  );
};
