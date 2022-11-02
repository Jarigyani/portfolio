import SkillProgress from '@/skillProgress'
import TypeTexts from '@/typeTexts'
import type { NextPage } from 'next'
import Head from 'next/head'
import Typewriter from 'typewriter-effect'

const Home: NextPage = () => {
  const siteTitle = 'Jarigyani'
  return (
    <>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="left-1/2">
        <TypeTexts>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString(`My skills ↓`).start()
            }}
          />
        </TypeTexts>
      </div>
      <SkillProgress />
    </>
  )
}
export default Home
