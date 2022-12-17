import BlogCard from '@/BlogCard'
import Layout from '@/Layout'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'
import { Contents } from 'types/types'
import { client } from '../libs/client'

type Props = {
  blogs: Contents[]
}

export default function Home({ blogs }: Props) {
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <Layout text="Blog" typestring="Blog">
      <div className="max-w-max justify-center rounded-lg sm:bg-base-200">
        <div>
          <h1 className="my-5 text-center text-3xl md:text-6xl">Articles</h1>
        </div>
        <ul className="grid grid-cols-1 gap-6 sm:m-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
            if (blog.category[0].id === 'gakkou') {
              return
            }
            return (
              <BlogCard
                eyecatch={blog.eyecatch}
                alt={blog.id}
                description={blog.description}
                title={blog.title}
                key={blog.id}
                cats={blog.category}
              />
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blogs: data.contents,
    },
  }
}
