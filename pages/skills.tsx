import Layout from '@/Layout'
import SkillProgress from '@/skillProgress'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  const siteTitle = 'Jarigyani'
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout text="Skills">
        <SkillProgress />
      </Layout>
    </>
  )
}
export default Home
