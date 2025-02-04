import React from "react";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 py-32">
        <div className="col-span-2">
          <h2 className="py-4 text-primary">About Me</h2>
          <p className="py-2 text-foreground">
            I&apos;m Sean Balbale, a sophomore and student-athlete at Trinity College
            pursuing a double major in Electrical & Computer Engineering and
            Computer Science. Passionate about technology since age 10, I have
            six years of experience in software engineering and technical
            support, assisting local businesses and students by designing custom
            computers, installing software and Wi-Fi systems, and automating
            cloud backups. My internship at East Coast Metrology allowed me to
            conduct high-precision measurements and work with advanced metrology
            equipment, while at Titan Advanced Energy Solutions, I developed
            Python applications to visualize ultrasonic battery data, enhancing
            defect detection processes for EV batteries. Additionally, I refined
            my customer service and problem-solving skills as an apprentice
            optician at Warby Parker. With a strong ability to balance
            academics, athletics, and technical projects, I enjoy taking on
            challenges that push me to think critically and collaborate
            effectively. Currently seeking a software engineering or embedded
            systems internship, I am eager to apply my skills, tackle complex
            problems, and continue growing professionally. Let&apos;s connect!
            {/*             
            I&apos;ve loved technology and engineering for as long as I can
            remember. I taught myself how to code when I was ten and have been
            coding ever since. Ten years later, I&apos;m a sophomore at Trinity
            College studying Computer Engineering and Computer Science. I love
            to code and create new things, and I always want to learn more! */}
          </p>

          <Link href="/#projects">
            <p className="py-2 text-foreground underline cursor-pointer">
              Check out my latest projects
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
