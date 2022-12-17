import BlogCard from '@/BlogCard'
import Layout from '@/Layout'
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
      <div className="max-w-max justify-center rounded-lg bg-base-200 p-5">
        <div>
          <h1 className="mb-5 text-center text-3xl md:text-6xl">Articles</h1>
        </div>
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => {
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
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: 'blogs' })

  return {
    props: {
      blogs: data.contents,
    },
  }
}
