import * as cheerio from 'cheerio'

// cheerio使って見出しを配列に格納する
export const renderToc = (body) => {
  const $ = cheerio.load(body)
  const headings = $('h1, h2, h3').toArray()
  const toc = headings.map((data) => ({
    text: data.children[0].data,
    id: data.attribs.id,
    name: data.name,
  }))

  return toc
}
