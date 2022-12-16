export type Blog = {
  contents: Contents[]
  totalCount: number
  offset: number
  limit: number
}

export type Contents = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  title: string
  content: string
  eyecatch: {
    url: string
    height: number
    width: number
  }
  category: Category[]
  'toc-visible': boolean
  'type-string': string
}

export type Category = {
  id: string
  createdAt: string
  updatedAt: string
  publishedAt: string
  revisedAt: string
  name: string
}
