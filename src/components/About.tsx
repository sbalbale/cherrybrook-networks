import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-32">
        <div className="col-span-2">
          <h2 className="py-4 text-primary">About Me</h2>
          <p className="py-2 text-foreground">
            I&apos;ve loved technology and engineering for as long as I can remember. 
            I taught myself how to code when I was ten and have been coding ever since. 
            Ten years later, I&apos;m a sophomore at Trinity College studying Computer 
            Engineering and Computer Science. I love to code and create new things, and I always want 
            to learn more!
          </p>

          <Link href="/#projects">
            <p className="py-2 text-foreground underline cursor-pointer">
              Check out my latest projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;