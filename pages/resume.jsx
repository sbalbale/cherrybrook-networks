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
            <a
              href="https://www.linkedin.com/in/sean-balbale-7b7689174/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={25} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/sbalbale"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={25} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>Software Development 
              <span className="px-1">|</span> Engineering {" "}
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
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span><span className="px-2">Python</span>
            <span className="px-2">|</span><span className="px-2">Java</span>
            <span className="px-2">|</span><span className="px-2">Arduino</span>
            <span className="px-2">|</span><span className="px-2">HTML </span>
            <span className="px-2">|</span><span className="px-2">CSS </span>
            <span className="px-2">|</span><span className="px-2">Tailwind CSS</span>
            <span className="px-2">|</span><span className="px-2">Javascript</span>
            <span className="px-2">|</span><span className="px-2">Node.JS</span>
            <span className="px-2">|</span><span className="px-2">React.JS</span>
            <span className="px-2">|</span><span className="px-2">Next.JS</span>
            <span className="px-2">|</span><span className="px-2">Git</span>
            <span className="px-2">|</span><span className="px-2">Twilio</span>
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
            <li>Managed all the technological needs of Dockyard Capital Management</li>
            <li>Designed and built software to solve schedule conflicts</li>
          </ul>
        </div>
        {/* End of Experience */}
      </div>
    </>
  );
};

export default resume;
