import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaDiscord, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#edf0f3');
  const [linkColor, setLinkColor] = useState('#353238');
  const router = useRouter();

  useEffect(() => {
    if(
      router.asPath === '/resume'
    ) {
      setNavBg('#edf0f3');
      setLinkColor('#353238');
    }
    else{
      setNavBg('#edf0f3');
      setLinkColor('#353238');
    }
  },[router]);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{backgroundColor: `${navBg}`,
              color: `${linkColor}`,}}
      
      className={
        shadow
          ? "fixed w-full h-[100px] shadow-xl z-[100]"
          : "fixed w-full h-[100px] z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src="/assets/navLogoScaled.png"
            alt="/"
            width="100"
            height="100"
          />
        </Link>
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/resume">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                src="/assets/navLogoScaled.png"
                width="87"
                height="87"
                alt=""
              />
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">About</li>
              </Link>
              <Link href="/#skills">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Skills</li>
              </Link>
              <Link href="/#projects">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Projects</li>
              </Link>
              <Link href="/resume">
                <li onClick={()=> setNav(false)}i className="py-4 text-sm">Resume</li>
              </Link>
              <Link href="/#contact">
                <li onClick={()=> setNav(false)} className="py-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#ff1744]">
                Lets Chat
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="font-bold underline"
                    href="https://github.com/sbalbale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="font-bold underline"
                    href="https://www.linkedin.com/in/sean-balbale-7b7689174/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="font-bold underline"
                    href="https://twitter.com/seanbalbale"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <BsTwitter />
                  </a>
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                  <a
                    className="font-bold underline"
                    href="https://discordapp.com/users/325794320042950666"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
