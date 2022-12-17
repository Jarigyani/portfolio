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
      <ul className="grid justify-center gap-6 md:flex">
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
