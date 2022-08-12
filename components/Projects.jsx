import React from "react";
import ProjectItem from "./ProjectItem";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";


const Projects = () => {
  return (
    <div id="projects" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-32">
        <p className="text-xl tracking-widest uppercase text-[#f00043]">
          Projects
        </p>
        <h2>What I&apos;ve Been Working On</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="15-112: Fail Early and Often"
            description="
          15-112: Fail Early and Often is a roguelite game that I made for my CMU 15112 term project.
          I chose to make a roguelite because I love the genre and I thought it would be fun to make."
            link="https://github.com/sbalbale/15-112-Fail-Early-and-Often"
            status="Completed on 08-13-22"
          />
          <ProjectItem
            title="Space Invaders"
            description="
          Space Invaders is a clone of the classic game Space Invaders for the Atari 2600.
          I made this game because I wanted to practice using Pygame."
            link="https://github.com/sbalbale/SpaceInvaders"
            status="Completed on 07-20-2020"
          />
          <ProjectItem
            title="Cherrybrook Networks"
            description="
          This is a my personal portfolio website. I made it because I wanted to learn Next.js, React and Tailwind.
          I also wanted to practice using CSS, Javascript, and HTML."
            link="https://github.com/sbalbale/cherrybrook-networks"
            status="Completed on 08-14-2022"
          />
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl p-4 group hover:bg-gradient-to-r from-[#f00043] to-[##5E4E92]">
            <a
              href="https://github.com/sbalbale"
              target="_blank"
              rel="noreferrer"
            >
              <div className="py-5 overflow-y-hidden space-y-3">
                <div className="text-2xl font-bold text-[#353238]">
                  Check out my other projects!
                </div>
                <div className="px-3 py-2 flex items-center justify-center h-auto w-full ">
                  <h2 className="text-center">@sbalbale on Github</h2>
                  <div className="flex">
                    <FaGithub size={50} style={{ marginRight: "1rem" }} />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
