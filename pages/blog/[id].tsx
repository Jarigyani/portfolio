import { renderToc } from '@/render-toc'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import Image from 'next/image'
import { Blog, Contents } from 'types/types'
import { client } from '../../libs/client'

type Props = {
  content: Contents
  highlightedBody: string
}

export default function BlogId({ content, highlightedBody }: Props) {
  const toc = renderToc(content.content)
  const handleOnClick = (id: string) => {
    const target = document.getElementById(id)
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <div>
      {toc.map((toc) => (
        <p key={toc.id} onClick={() => handleOnClick(toc.id)}>
          {toc.text}
        </p>
      ))}
      <div className="prose mx-auto">
        <h1 className="rounded-lg bg-zinc-800 p-2">{content.title}</h1>
        <Image
          src={content.eyecatch.url}
          width={content.eyecatch.width}
          height={content.eyecatch.height}
          alt="eyecatch"
        />
        <p>{content.publishedAt}</p>
        <div
          dangerouslySetInnerHTML={{
            __html: `${highlightedBody}`,
          }}
        />
      </div>
    </div>
  )
}

// 静的生成のためのパスを指定
export const getStaticPaths = async () => {
  const data: Blog = await client.get({ endpoint: 'blogs' })

  const paths = data.contents.map((content) => `/blog/${content.id}`)
  return { paths, fallback: false }
}

// データをテンプレートに受け渡す部分の処理を記述
export const getStaticProps = async (context: { params: { id: string } }) => {
  const id = context.params.id
  const data = await client.get({ endpoint: 'blogs', contentId: id })

  // highlight.jsの処理
  const $ = cheerio.load(data.content)
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text())
    $(elm).html(result.value)
    $(elm).addClass('hljs')
  })

  return {
    props: {
      content: data,
      highlightedBody: $.html(),
    },
  }
}