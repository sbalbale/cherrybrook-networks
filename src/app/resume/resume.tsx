"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import PdfViewer from "../resume/PdfViewer";

export function Resume() {
  return (
    <div id="resume" className="w-full h-screen text-center py-20">
    <div className="flex flex-col items-center justify-center min-h-[100dvh] px-4 md:px-6 py-12 md:py-24 lg:py-32">
      <div className="max-w-3xl w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            Take a look at my resume.
          </h1>
        </div>
        <div className="aspect-[8/11] w-full rounded-lg overflow-hidden">
          {/* <PdfViewer url={"../SeanBalbaleResume.pdf"} /> */}
          <iframe src="../SeanBalbaleResume.pdf" className="w-full h-full" title="Sean Balbale Resume" />

        </div>
        <div className="justify-center">
          <Link className="" download href="/SeanBalbaleResume.pdf">
            <Button size="lg" className="w-full text-foreground bg-primary">
              Download Resume
            </Button>
          </Link>
        </div>
      </div>
      </div>
    </div>
  );
}
