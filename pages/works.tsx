import SampleContents from '@/sampleContents'
import TypeWorks from '@/typewriter/typeWorks'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const siteTitle = 'Jarigyani'
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="absolute left-1/2">
        <TypeWorks />
      </div>
      <SampleContents />
    </>
  )
}
export default Home
