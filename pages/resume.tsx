import * as React from "react";
import { ExtendedRecordMap } from "notion-types";
import { NotionPage } from "../components/NotionPage";
import { rootNotionPageId } from "../lib/config";
import notion from "../lib/notion";
import Head from "next/head";
import { NotionAPI } from "notion-client";

export const getStaticProps = async () => {
  const pageId = process.env.NOTION_ID || rootNotionPageId;
  const recordMap = await notion.getPage(pageId);

  return {
    props: {
      recordMap,
    },
    revalidate: 10,
  };
};

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return (
    <>
      <NotionPage
        title={"Sean | Resume"}
        description={
          "I’m a full-stack developer with a passion for building beautiful, responsive websites and applications."
        }
        icon={"/favicon.ico"}
        recordMap={recordMap}
        rootPageId={rootNotionPageId}
      />

      <div className="w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
        <div className="p-4">
          <a
            href="/assets/SeanBalbaleResume.pdf"
            download="Sean's Resume"
            target="_blank"
          >
            <button className="w-full p-4 text-gray-100 mt-4">
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
