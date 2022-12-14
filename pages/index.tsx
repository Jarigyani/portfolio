import Layout from '@/Layout'
import { useAnimation } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  const siteTitle = 'Jarigyani'
  const controles = useAnimation()
  const onLoadImages = () => {
    controles.start({ opacity: 1, y: 0 })
  }

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Layout text="I'm frontend engineer">
        <div className="mx-auto mt-10 w-[310px] justify-between md:mt-20 md:flex md:w-[900px]">
          <div className="max-w-[400px]">
            <h2 className="mb-5 text-xl font-bold">好きなもの</h2>
            <ul>
              <li>バイク</li>
              <li>わいわい</li>
              <li>ウルフルズ</li>
              <li>ゲーム</li>
            </ul>
          </div>
          <div className="mt-5">
            <Image
              src={'/images/bike.webp'}
              alt="bike"
              width={400}
              height={300}
              className="rounded-lg"
              onLoad={onLoadImages}
            />
          </div>
        </div>
      </Layout>
    </>
  )
}
export default Home
