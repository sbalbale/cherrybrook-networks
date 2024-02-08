import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Navbar } from "../components/Navbar";

const resume = () => {
  return (
    <>
      <Head>
        <title>Sean | Resume</title>
        <meta
          name="description"
          content="I’m a full-stack developer with a passion for building beautiful, responsive websites and applications."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Sean Balbale</h2>
          <div className="flex">
            <Link
              href="https://www.linkedin.com/in/seanbalbale"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} style={{ marginRight: "1rem" }} />
            </Link>
            <Link
              href="https://github.com/sbalbale"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} style={{ marginRight: "1rem" }} />
            </Link>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Software Development
              <span className="px-1">|</span> Engineering{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Software Development</p>
            <p className="py-2">Engineering</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          {/* Paragraph Here */}
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2 text-center">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span> Python 
            <span className="px-2">|</span> Java 
            <span className="px-2">|</span> Arduino 
            <span className="px-2">|</span> HTML 
            <span className="px-2">|</span> CSS 
            <span className="px-2">|</span> Tailwind  
            <span className="px-2">|</span> Javascript 
            <span className="px-2">|</span> Node.JS 
            <span className="px-2">|</span> React.JS 
            <span className="px-2">|</span> Next.JS 
            <span className="px-2">|</span> Git 
            <span className="px-2">|</span> Twilio 
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">Dockyard Capital Management</span>
            <span className="px-2">|</span>Boston, Massachusetts
          </p>
          <p className="py-1 italic">CTO (2019-2022) </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Managed all the technological needs of Dockyard Capital Management
            </li>
            <li>Designed and built software to solve schedule conflicts</li>
          </ul>
        </div>
        {/* End of Experience */}
      </div>
    </>
  );
};

export default resume;
