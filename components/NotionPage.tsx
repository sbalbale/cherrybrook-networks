import * as React from "react";
import Head from "next/head";

import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { getPageTitle } from "notion-utils";
import { Pdf } from "react-notion-x/build/third-party/pdf";
import { Equation } from 'react-notion-x/build/third-party/equation'
import dynamic from "next/dynamic";
import Link from "next/link";


export const NotionPage = ({
  recordMap,
  rootPageId,
  title,
  description,
  icon,
}: {
  recordMap: ExtendedRecordMap;
  rootPageId?: string;
  title: string;
  description: string;
  icon: string;
}) => {
  if (!recordMap) {
    return null;
  }

  const titlePage = getPageTitle(recordMap);
  console.log(titlePage, recordMap);

  return (
    <>
      <Head>
        <meta name="description" content={description} />

        <link rel="icon" href={icon} />
        <title>{title}</title>
      </Head>

      <div className="w-full flex py-16"></div>
      <NotionRenderer
        recordMap={recordMap}
        fullPage={false}
        darkMode={false}
        header={false}
        rootPageId={rootPageId}
        components={{
          Equation,
        }}
      />
    </>
  );
};
