import Layout from '@/Layout'
import { useEffect } from 'react'
export default function Custom404() {
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return <Layout text="404" typestring="404: Not found" />
}
