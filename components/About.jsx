import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#f00043]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            I&apos;ve loved technology and engineering for as long as I can
            remember. I taught myself how to code when I was ten and have been
            coding ever since. Eight years later and I&apos;m now a senior in
            high school. I love to code and create new things and always want to
            learn more!
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out my latest projects
            </p>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
