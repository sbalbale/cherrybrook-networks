"use client";
import { HoverEffect } from "../components/ui/card-hover-effect";

export function Projects() {
  const projects = [
    {
      title: "CS 2510 Project 2",
      description:
        " This is a Java based image editing software that I made for my CS 2510 class at Northeastern University. It has an interactive menu and uses seam carving to resize images.",
      link: "https://github.com/seanbalbale/CS2510-Project-2",
    },
    {
      title: "15-112: Fail Early and Often",
      description:
        " 15-112: Fail Early and Often is a roguelite game that I made for my CMU 15112 term project. I chose to make a roguelite because I love the genre and I thought it would be fun to make.",
      link: "https://github.com/seanbalbale/15-112-Fail-Early-and-Often",
    },
    {
      title: "Cherrybrook Networks",
      description:
        " This is a my personal portfolio website. I made it because I wanted to learn Next.js, React and Tailwind. I also wanted to practice using CSS, Javascript, and HTML.",
      link: "https://github.com/seanbalbale/cherrybrook-networks",
    },
    {
      title: "Space Invaders",
      description:
        "Space Invaders is a clone of the classic game Space Invaders for the Atari 2600. I made this game because I wanted to practice using Pygame.",
      link: "https://github.com/seanbalbale/SpaceInvaders",
    },
    {
      title: "WHS Bot",
      description:
        "WHS Bot is a Discord bot that I made for my high school's Discord server. It has a variety of features including a command that gives people roles for the grade they are in, and a command that sends Brooklyn 99 quotes.",
      link: "https://github.com/seanbalbale/WHSbot",
    },
    {
      title: "Check out my other projects!",
      description: "@sbalbale on Github",
      link: "https://github.com/seanbalbale",
    },
  ];

  return (
    // <div id="projects" className="flex items-center justify-center py-12 md:py-16 lg:py-20">
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-32">
        <div className="container">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-start text-primary">
            My Projects
          </h2>
          <HoverEffect items={projects} />
        </div>
      </div>
    </div>
  );
}
