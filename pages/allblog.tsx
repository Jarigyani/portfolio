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
      <ul className="mx-auto flex w-full justify-between">
        {blogs.map((blog) => {
          return (
            <BlogCard
              src={blog.eyecatch.url}
              alt={blog.id}
              content="test of content"
              title={blog.title}
              key={blog.id}
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
