"use client";

import { useState, useEffect, JSX, SVGProps } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ThemeSwitch from "./ThemeSwitch";

export default function Navbar() {

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full bg-background py-3 shadow-sm${
        isScrolled ? "border-border border-b-2" : ""
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center" prefetch={false}>
          <span className="ml-2 text-lg font-semibold text-foreground">
            <Image
              src="/images/logos/CherrybrookNetworksLogoText.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </span>
        </Link>
        <nav className="hidden space-x-6 md:flex">
          <Link
            href="/"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="/#about"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/#skills"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            Skills
          </Link>
          <Link
            href="/#projects"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            Resume
          </Link>
          {/* <Link
            href="/installs"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            Installs
          </Link> */}
          <Link
            href="/#contact"
            className="text-foreground hover:text-accent"
            prefetch={false}
          >
            Contact
          </Link>
          {/* <div className="justify-center items-center"> */}
            <ThemeSwitch />
          {/* </div> */}
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <MenuIcon className="h-6 w-6 text-muted" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="grid gap-4 py-6">
              <Link
                href="/"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                Home
              </Link>
              <Link
                href="/#about"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                About
              </Link>
              <Link
                href="/#skills"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                Skills
              </Link>
              <Link
                href="/#projects"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                Projects
              </Link>
              <Link
                href="/resume"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                Resume
              </Link>
              {/* <Link
                href="/installs"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                Installs
              </Link> */}
              <Link
                href="/#contact"
                className="flex items-center text-lg font-semibold text-foreground"
                prefetch={false}
              >
                Contact
              </Link>
              <ThemeSwitch />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
