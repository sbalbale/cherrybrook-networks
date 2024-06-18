"use client";
import { Card, CardContent } from "@/components/ui/card";
import { JSX, SVGProps } from "react";
import React from "react";
import { LinkPreview } from "./ui/link-preview";
import Image from "next/image";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full py-32">
        <div className="grid gap-12 rounded-lg p-6">
          <section>
            <h2 className="py-4 text-primary">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <LinkPreview url="https://www.python.org/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/python.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Python</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://www.java.com/en/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/java.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Java</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview
                url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                className="font-bold"
              >
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/javascript.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Javascript</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://isocpp.org/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/c++.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>C++</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview
                url="https://www.mathworks.com/products/matlab.html"
                className="font-bold"
              >
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/matlab.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Matlab</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://lua.org/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/lua.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Lua</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://www.arduino.cc/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/arduino.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Arduino</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://git-scm.com/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/git.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Git</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview
                url="https://www.twilio.com/en-us"
                className="font-bold"
              >
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/twilio.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Twilio</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://tailwindcss.com/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/tailwind.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>TailwindCSS</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview
                url="https://react.dev/"
                className="font-bold"
              >
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/react.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>React</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
              <LinkPreview url="https://nextjs.org/" className="font-bold">
                <Card className="h-full shadow-md shadow-secondary">
                  <CardContent className="flex flex-col items-center gap-4 p-6 h-full">
                    <div className="grid grid-cols-2 gap-4 justify-center items-center">
                      <div className="m-auto">
                        <Image
                          src="/images/skills/nextjs.png"
                          width="64"
                          height="64"
                          alt="/"
                        />
                      </div>
                      <div className="flex flex-col items-center justify-center">
                        <h3>Next.JS</h3>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </LinkPreview>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Skills;

function CodeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CodepenIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
      <line x1="12" x2="12" y1="22" y2="15.5" />
      <polyline points="22 8.5 12 15.5 2 8.5" />
      <polyline points="2 15.5 12 8.5 22 15.5" />
      <line x1="12" x2="12" y1="2" y2="8.5" />
    </svg>
  );
}

function DatabaseIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5V19A9 3 0 0 0 21 19V5" />
      <path d="M3 12A9 3 0 0 0 21 12" />
    </svg>
  );
}

function GitGraphIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
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
      <circle cx="5" cy="6" r="3" />
      <path d="M5 9v6" />
      <circle cx="5" cy="18" r="3" />
      <path d="M12 3v18" />
      <circle cx="19" cy="6" r="3" />
      <path d="M16 15.7A9 9 0 0 0 19 9" />
    </svg>
  );
}

function NetworkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <rect x="16" y="16" width="6" height="6" rx="1" />
      <rect x="2" y="16" width="6" height="6" rx="1" />
      <rect x="9" y="2" width="6" height="6" rx="1" />
      <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
      <path d="M12 12V8" />
    </svg>
  );
}

function WindIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
      <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
      <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
    </svg>
  );
}
