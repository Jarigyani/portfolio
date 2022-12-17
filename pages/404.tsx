import Layout from '@/Layout'
import SplineModel from '@/splineModel'
import { useEffect } from 'react'
export default function Custom404() {
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <Layout text="404" typestring="404: Not found">
      <SplineModel />
    </Layout>
  )
}
