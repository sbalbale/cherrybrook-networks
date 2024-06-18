import Head from "next/head";
import { Installs } from "./installs";
import Navbar from "./navbar";

export default function Home() {
  return (
    <>
    {/* <Head>
      <title>Cherrybrook Networks</title>
      <meta name="description" content="Made by Sean Balbale" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head> */}
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Installs />
      </div>
    </>
  );
}
