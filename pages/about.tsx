import Layout from '@/Layout'
import SkillProgress from '@/skillProgress'
import type { NextPage } from 'next'
import { useEffect } from 'react'

const Home: NextPage = () => {
  // const controles = useAnimation()
  // const onLoadImages = () => {
  //   controles.start({ opacity: 1, y: 0 })
  // }
  useEffect(() => {
    const target = document.getElementById('model')
    target?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <Layout text="Jarigyani" typestring="I'm frontend engineer">
        <SkillProgress />
      </Layout>
    </>
  )
}
export default Home
