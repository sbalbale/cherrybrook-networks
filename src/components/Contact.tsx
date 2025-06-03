"use client";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React, { JSX, SVGProps, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { cn } from "@/utils/cn";
import { EmailSubmitted } from "./ui/email-submitted";

export function Contact() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      firstName: e.target.firstname.value,
      lastName: e.target.lastname.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };
  return (
    <div
      id="contact"
      className="flex items-center justify-center h-screen bg-background"
    >
      <section className="container px-4 md:px-6 grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
              Get in Touch
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl ">
              Have a project in mind or just want to say hello? Fill out the
              form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <div className="items-center space-x-4">
          <Link href="/SeanBalbaleWork.vcf" download="ContactInfo">
          <Button variant="default" className="w-full text-xl font-semibold bg-muted-foreground text-background hover:bg-primary hover:text-foreground">
            Download Contact Info
          </Button>
          </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="https://github.com/sbalbale"
            >
              <FaGithub className="h-10 w-10" />
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground"
              href="https://www.linkedin.com/in/seanbalbale/"
            >
              <FaLinkedin className="h-10 w-10" />
            </Link>
          </div>
        </div>
        {emailSubmitted ? (
          <EmailSubmitted />
        ) : (
          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input
                  id="firstname"
                  name="firstname"
                  placeholder="Enter your first name."
                  type="text"
                />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Enter your last name."
                  type="text"
                />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email."
                type="email"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                name="subject"
                placeholder="Type the subject here."
                type="text"
              />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="message">Message</Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                name="message"
                className="min-h-[60px]"
              />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br relative group/btn from-background to-muted block w-full text-foreground rounded-md h-10 font-medium shadow-border"
              type="submit"
            >
              Send Message
              <BottomGradient />
            </button>
          </form>
        )}
      </section>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-accent to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
