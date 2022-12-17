import DrawerSide from '@/drawerSide'
import Footer from '@/footer'
import Navbar from '@/navbar'
import { Noto_Serif_JP } from '@next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useDarkmode } from 'hooks/store'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

const inter = Noto_Serif_JP({
  weight: '400',
  subsets: ['japanese'],
  variable: '--font-inter',
})

function MyApp({ Component, pageProps, router }: AppProps) {
  const darkmode = useDarkmode((state) => state.darkmode)
  return (
    <div className="drawer" data-theme={`${darkmode ? 'dark' : 'light'}`}>
      {/* tailwindを通すと日本語フォントが不安定なので直接読み込み */}
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily}, serif;
        }
      `}</style>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <div id="model" />
        <div className="min-h-screen">
          <Navbar />
          {/* <SplineModel /> */}
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
      <div className="drawer-side">
        <DrawerSide />
      </div>
    </div>
  )
}

export default MyApp
