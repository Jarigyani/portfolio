import Layout from '@/Layout'
import SkillProgress from '@/skillProgress'
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Home: NextPage = () => {
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <Layout text="Skills" typestring="Skills">
        <SkillProgress />
      </Layout>
    </>
  )
}
