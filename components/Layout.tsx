import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react'
import Typewriter from 'typewriter-effect'

type Props = {
  text: string
  children?: ReactNode
  typestring: string
}

const Layout = ({ text, children, typestring }: Props) => {
  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="pointer-events-none m-auto -mt-12 w-max rounded-xl bg-white/[.06] text-2xl leading-snug tracking-wider backdrop-blur-md md:text-6xl">
          <div className="mx-5 pb-1 md:pb-3">
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1000).typeString(typestring).start()
              }}
            />
          </div>
        </h1>
        <div className="mx-5">
          <div className="my-10 mx-auto w-max max-w-[1200px] rounded-xl bg-base-200 p-5">
            {children}
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Layout
