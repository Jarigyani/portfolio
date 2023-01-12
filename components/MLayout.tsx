import { ReactNode } from '@mdx-js/react/lib'
import { motion } from 'framer-motion'
import Head from 'next/head'

type Props = {
  text: string
  children: ReactNode
}

const MLayout = ({ text, children }: Props) => {
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
        className="mx-auto max-w-[1300px] justify-between p-5 lg:flex"
      >
        <div className="rounded-xl p-5 lg:w-[calc(100%_-_305px)]">
          <div className="mb-5 md:mb-10">
            <p className="text-center text-xl md:text-6xl">{text}</p>
          </div>
          <div className=""> {children}</div>
        </div>
      </motion.div>
    </>
  )
}

export default MLayout
