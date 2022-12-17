import Layout from '@/Layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  const siteTitle = 'Jarigyani'
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout text="Works" />
    </>
  )
}
export default Home
