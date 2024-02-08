// pages/resume.js
import PdfViewer from "../components/PdfViewer";
import Link from "next/link";
import Head from 'next/head';

const Resume = () => {
  return (
    <div>
    <Head>
      <title>Sean Balbale Resume</title>
      <meta name="description" content="Made by Sean Balbale" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div>
        <PdfViewer url={"/assets/SeanBalbaleResume.pdf"} />
      </div>
      <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
        <div className="p-4">
          <Link
            href="/assets/SeanBalbaleResume.pdf"
            download="SeanBalbaleResume.pdf"
            target="_blank"
          >
            <button className="w-full p-4 text-gray-100 mt-4">
              Download Resume
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Resume;
