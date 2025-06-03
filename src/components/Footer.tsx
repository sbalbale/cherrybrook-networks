
"use client";
import { useState, useEffect, JSX, SVGProps } from "react"
import Image from "next/image"

const Footer = () => {
    const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if ((window.innerHeight+window.scrollY) < (document.body.offsetHeight)) {
        setIsScrolled(false)
      } else {
        setIsScrolled(true)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <footer className={`footer bottom-0 z-10 w-full bg-background shadow-sm${
        isScrolled ? "border-border border-t-2" : ""
      }`}>
      <div className="container p-3 flex justify-between align-middle items-center mx-auto">
        <span>
        <Image
              src="/images/logos/CherrybrookNetworksLogoText.png"
              alt="Logo"
              width={100}
              height={100}
              />
        </span>
        <p className="text-accent justify-center align-middle items-center">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;