import DrawerSide from '@/drawerSide'
import Footer from '@/footer'
import Navbar from '@/navbar'
import { AnimatePresence } from 'framer-motion'
import { useDarkmode } from 'hooks/store'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  const darkmode = useDarkmode((state) => state.darkmode)
  return (
    <div
      className="drawer font-dot"
      data-theme={`${darkmode ? 'dark' : 'light'}`}
    >
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
