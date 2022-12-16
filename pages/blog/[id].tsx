import BlogLayout from '@/BlogLayout'
import { renderToc } from '@/render-toc'
import cheerio from 'cheerio'
import hljs from 'highlight.js'
import 'highlight.js/styles/hybrid.css'
import Image from 'next/image'
import { useEffect } from 'react'
import { Blog, Contents } from 'types/types'
import { client } from '../../libs/client'

type Props = {
  content: Contents
  highlightedBody: string
}
// type Toc = {
//   text: string
//   id: string
//   name: string
// }

export default function BlogId({ content, highlightedBody }: Props) {
  const toc = renderToc(content.content)
  // const handleOnClick = (id: string) => {
  //   const target = document.getElementById(id)
  //   target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  // }

  const pdate = new Date(content.publishedAt)
  const udate = new Date(content.updatedAt)

  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <BlogLayout text={content.title} toc={toc}>
      <div className="relative mb-10 text-gray-500">
        <Image
          src={content.eyecatch.url}
          width={content.eyecatch.width}
          height={content.eyecatch.height}
          alt="eyecatch"
          className="rounded-md"
        />
        <p className="absolute bottom-10 right-2 flex justify-end">
          Published at {pdate.toDateString()}
        </p>
        <p className="absolute bottom-3 right-2 flex justify-end">
          Updated at {udate.toDateString()}
        </p>
      </div>
      <div className="prose max-w-none prose-headings:scroll-mt-16 prose-h1:underline prose-pre:bg-[#1D1F21] prose-img:rounded-md">
        {/* <div>
          <p className="text-xl underline">List of contents</p>
          <ul>
            {toc.map((toc) => {
              if (toc.name === 'h1') {
                return (
                  <li
                    key={toc.id}
                    onClick={() => handleOnClick(toc.id)}
                    className="text-xl"
                  >
                    {toc.text}
                  </li>
                )
              }
              return (
                <ul key={toc.id} onClick={() => handleOnClick(toc.id)}>
                  <li className="text-md">{toc.text}</li>
                </ul>
              )
            })}
          </ul>
        </div> */}
        <div
          dangerouslySetInnerHTML={{
            __html: `${highlightedBody}`,
          }}
        />
      </div>
    </BlogLayout>
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
