import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'jarigyani-blog',
  apiKey: process.env.NEXT_CMS_API_KEY as string,
})
