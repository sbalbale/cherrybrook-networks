import * as React from 'react'

import { ExtendedRecordMap } from 'notion-types'

import { NotionPage } from '../components/NotionPage'
import { rootNotionPageId } from '../lib/config'
import notion from '../lib/notion'

export const getStaticProps = async () => {
  const pageId = "e1b1f0efacf8468289dff8b3315244b3"
  const recordMap = await notion.getPage(pageId)

  return {
    props: {
      recordMap
    },
    revalidate: 10
  }
}

export default function Page({ recordMap }: { recordMap: ExtendedRecordMap }) {
  return <NotionPage recordMap={recordMap} rootPageId={rootNotionPageId} />
}
