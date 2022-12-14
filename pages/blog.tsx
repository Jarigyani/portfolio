import Layout from '@/Layout'
import Link from 'next/link'
import { Contents } from 'types/types'
import { client } from '../libs/client'

type Props = {
  blogs: Contents[]
}

export default function Home({ blogs }: Props) {
  return (
    <Layout text="Blog">
      <ul className="mx-auto w-96">
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>
              <a>{blog.title}</a>
            </Link>
          </li>
        ))}
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
