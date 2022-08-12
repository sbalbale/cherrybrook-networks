import React from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill, BsTwitter } from "react-icons/bs";
import { Typewriter, useTypewriter, Cursor } from "react-simple-typewriter";
import "react-simple-typewriter/dist/index";

const Main = () => {
  const { text } = useTypewriter({
    words: ["developer.", "rower.", "singer.", "student."],
    loop: 0,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1500,
  });
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center py-32">
        <div>
          <h1 className="py-4 font-extrabold ">
            <span className="text-[#353238]">Hello, I&apos;m</span>
            <span className="text-[#ff1744]"> Sean Balbale </span>
          </h1>
          <h1 className="py-2 font-extrabold text-[#353238]">
            <span className="xl:inline font-typewriter">
              I&apos;m a {text}
              <Cursor cursorStyle="_" />
            </span>
          </h1>
          <div className="flex items-center justify-between py-4">
            <a
              className="font-bold underline"
              href="https://github.com/sbalbale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              className="font-bold underline"
              href="https://www.linkedin.com/in/seanbalbale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              className="font-bold underline"
              href="https://twitter.com/seanbalbale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsTwitter />
              </div>
            </a>
            <a
              className="font-bold underline"
              href="https://discordapp.com/users/325794320042950666"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaDiscord />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
