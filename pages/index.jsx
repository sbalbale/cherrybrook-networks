import Main from "../components/Main";
import Head from "next/head";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cherrybrook Networks</title>
        <meta name="description" content="Made by Sean Balbale" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#f00043]" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
