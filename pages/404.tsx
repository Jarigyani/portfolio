import TypeTexts from '@/typeTexts'
import Typewriter from 'typewriter-effect'
export default function Custom404() {
  return (
    <>
      <div className="left-1/2 mb-20">
        <TypeTexts>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).typeString(`404:NotFound`).start()
            }}
          />
        </TypeTexts>
      </div>
    </>
  )
}
