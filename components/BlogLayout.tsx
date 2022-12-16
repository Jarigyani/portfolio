import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Category } from 'types/types'
import Mokuji from './Mokuji'

type Props = {
  text: string
  children?: ReactNode
  toc: { text: string; id: string; name: string }[]
  categories: Category[]
}
const BlogLayout = ({ text, children, toc, categories }: Props) => {
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
        <div className="rounded-xl bg-base-200 p-5 shadow-md lg:w-[calc(100%_-_300px)]">
          <div className="mb-5 md:mb-10">
            <p className="text-center text-xl md:text-6xl">{text}</p>
          </div>
          {children}
        </div>
        <Mokuji categories={categories} toc={toc} />
      </motion.div>
    </>
  )
}

export default BlogLayout
