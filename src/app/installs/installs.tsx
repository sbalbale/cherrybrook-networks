"use client";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { motion } from "framer-motion";
import { JSX, SVGProps } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Contact } from "@/components/Contact";
import { Cog, Computer, Network, Server } from "lucide-react";

export function Installs() {
  return (
    <div
      is="installs"
      className="w-full h-full text-center p-2 justify-center items-center py-32 overflow-x-hidden"
    >
      <section className="bg-background">
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-foreground max-w-4xl leading-relaxed lg:leading-snug text-center "
          >
            From regular technical support to dedicated hardware installs,{" "}
            <Highlight className="text-foreground">
              we&apos;ve got you covered.
            </Highlight>
          </motion.h1>
        </HeroHighlight>
      </section>
      <section
        id="services"
        className="py-12 md:py-24 lg:py-32 text-center justify-center items-center"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-border px-3 py-1 text-sm">
              Our Services
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              What We Offer
            </h2>
            <p className=" text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our comprehensive IT services are designed to meet the unique
              needs of your home.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="rounded-lg bg-muted p-6 shadow-sm transition-all hover:shadow-md hover:shadow-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                <Server className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Infrastructure Management
              </h3>
              <p className="text-foreground">
                Optimize your IT infrastructure for maximum performance and
                reliability.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-sm transition-all hover:shadow-md hover:shadow-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                <Network className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Network Installations
              </h3>
              <p className="text-foreground">
                Install new networks or upgrade existing ones.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-sm transition-all hover:shadow-md hover:shadow-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                <Cog className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Technical Support
              </h3>
              <p className="text-foreground">
                Fix issues with your networks or devices.
              </p>
            </div>
            <div className="rounded-lg bg-muted p-6 shadow-sm transition-all hover:shadow-md hover:shadow-primary">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-background">
                <Computer className="h-6 w-6 text-muted-foreground" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-primary">
                Computer Builds and Setups
              </h3>
              <p className="text-foreground">
                Get a custom computer built to your specifications.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section
        id="testimonials"
        className="bg-bacground py-12 md:py-24 lg:py-32 "
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-4 text-center justify-center items-center">
            <div className="inline-block rounded-lg bg-border px-3 py-1 text-sm ">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold text-center tracking-tighter sm:text-5xl">
              What Our Clients Say
            </h2>
            <div className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied customers about their experience working
              with us.
            </div>
          </div>
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section> */}
      <section id="contact" className="">
        <Contact />
      </section>
    </div>
  );
}

const testimonials: { quote: string; name: string; title: string; }[] = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
];
