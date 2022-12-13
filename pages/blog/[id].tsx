import { Blog, Contents } from 'types/types'
import { client } from '../../libs/client'

type Props = {
  content: Contents
}

export default function BlogId({ content }: Props) {
  return (
    <main className="prose mx-auto">
      <h1>{content.title}</h1>
      <p>{content.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${content.content}`,
        }}
      />
    </main>
  )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data: Blog = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })

  return {
    props: {
      content: data,
    },
  }
}
