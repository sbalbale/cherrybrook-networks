"use client";
import React, { useEffect, useState } from "react";
import {
  TypewriterEffectSmooth,
  TypewriterEffect,
} from "./ui/typewriter-effect";
import { WavyBackground } from "./ui/wavy-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const words = [
    { text: "Hello," },
    { text: "I'm" },
    { text: "Sean", className: "text-primary" },
    { text: "Balbale", className: "text-primary" },
  ];

  const [colors, setColors] = useState({
    primary: "",
    secondary: "",
    accent: "",
    background: "",
    foreground: "",
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const primary = getComputedStyle(document.documentElement)
      .getPropertyValue("--primary")
      .trim();
    const secondary = getComputedStyle(document.documentElement)
      .getPropertyValue("--secondary")
      .trim();
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue("--accent")
      .trim();
    const background = getComputedStyle(document.documentElement)
      .getPropertyValue("--background")
      .trim();
    const foreground = getComputedStyle(document.documentElement)
      .getPropertyValue("--foreground")
      .trim();

    setColors({ primary, secondary, accent, background, foreground });
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return null; // or return a loading indicator
  }

  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center py-32">
        <WavyBackground
          className=" mx-auto pb-60 max-w-4xl "
          // max-w-4xl mx-auto pb-60
          backgroundFill={colors.background}
          colors={[colors.secondary, colors.accent]}
        >
          <div className="text-center">
            <h1 className="text-text mb-4 text-4xl lg:text-6xl font-extrabold">
              <TypewriterEffect
                words={words}
                className="text-foreground mb-4 text-4xl lg:text-6xl font-extrabold"
                cursorClassName="bg-primary"
              />
            </h1>
            <h1>
              <TextGenerateEffect
                className=""
                words="I'm a computer engineer and software developer based in Boston."
              />
            </h1>
            <div className="flex items-center justify-evenly py-4">
              <Link
                href="https://github.com/seanbalbale"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-lg" />
                  <div className="px-8 py-2  bg-background rounded-[6px] relative group transition duration-200 text-foreground hover:bg-transparent">
                    <FaGithub />
                  </div>
                </button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/seanbalbale/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="p-[3px] relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary rounded-lg" />
                  <div className="px-8 py-2  bg-background rounded-[6px] relative group transition duration-200 text-foreground hover:bg-transparent">
                    <FaLinkedin />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </WavyBackground>
      </div>
    </div>
  );
};

export default HeroSection;
