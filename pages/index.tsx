import Layout from '@/Layout'
import { useAnimation } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const siteTitle = 'Jarigyani'
  const controles = useAnimation()
  const onLoadImages = () => {
    controles.start({ opacity: 1, y: 0 })
  }
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout text="I'm frontend engineer">
        <div>
          <h2 className="mb-5 text-xl font-bold">好きなもの</h2>
          <ul>
            <li>バイク</li>
            <li>わいわい</li>
            <li>ウルフルズ</li>
            <li>ゲーム</li>
          </ul>
        </div>
        <div>
          <Image
            src={'/images/bike.webp'}
            alt="bike"
            width={400}
            height={300}
            className="rounded-lg"
            onLoad={onLoadImages}
          />
        </div>
      </Layout>
    </>
  )
}
export default Home
