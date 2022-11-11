import Introduction from '@/introduction'
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
              typewriter
                .pauseFor(1000)
                .typeString(`Welcome to my portfolio`)
                .pauseFor(1000)
                .deleteAll()
                .typeString("I'm a frontend engineer")
                .start()
            }}
          />
        </TypeTexts>
      </div>
      <Introduction />
    </>
  )
}
export default Home
