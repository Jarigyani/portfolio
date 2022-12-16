import { motion } from 'framer-motion'
import Head from 'next/head'
import { ReactNode } from 'react'
import { Category } from 'types/types'

type Props = {
  text: string
  children?: ReactNode
  toc: { text: string; id: string; name: string }[]
  categories: Category[]
}
const BlogLayout = ({ text, children, toc, categories }: Props) => {
  const handleOnClick = (id: string) => {
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

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
        <div className="hidden lg:block">
          <div className="mb-5 h-max w-72 rounded-xl bg-base-200 p-5 shadow-md">
            <p className="mb-3 text-xl">Categories</p>
            {categories.map((cat) => {
              return (
                <div key={cat.id} className="badge mr-2">
                  {cat.name}
                </div>
              )
            })}
          </div>
          <div className="sticky top-20 h-max w-72 rounded-xl bg-base-200 p-5 shadow-md">
            <p className="mb-5 text-xl">👻 List of contents</p>
            <ul className="ml-4 list-disc">
              {toc.map((toc) => {
                if (toc.name === 'h1') {
                  return (
                    <li
                      key={toc.id}
                      onClick={() => handleOnClick(toc.id)}
                      className="text-md mb-1"
                    >
                      <button>{toc.text}</button>
                    </li>
                  )
                }
                return (
                  <ul
                    key={toc.id}
                    onClick={() => handleOnClick(toc.id)}
                    className="ml-2 list-disc"
                  >
                    <li className="mb-1 text-sm opacity-70">
                      <button>{toc.text}</button>
                    </li>
                  </ul>
                )
              })}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default BlogLayout
