import DrawerSide from '@/drawerSide'
import Navbar from '@/navbar'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <div className="drawer font-dot font-bold">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <AnimatePresence mode="wait">
            <Component {...pageProps} key={router.asPath} />
          </AnimatePresence>
        </div>
        <div className="drawer-side">
          <DrawerSide />
        </div>
      </div>
    </>
  )
}

export default MyApp
