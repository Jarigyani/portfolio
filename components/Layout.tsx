import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react'

type Props = {
  text: string
  children?: ReactNode
  typestring: string
}

const Layout = ({ text, children }: Props) => {
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
        className="sm:mx-5"
      >
        <div className="mx-auto max-w-5xl">
          <div className="my-5 mx-auto flex justify-center">{children}</div>
        </div>
      </motion.div>
    </>
  )
}

export default Layout
