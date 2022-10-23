import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <AnimatePresence exitBeforeEnter mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
    </>
  )
}

export default MyApp
