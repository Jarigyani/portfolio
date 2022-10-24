import Typewriter from 'typewriter-effect'

const TypeTitle = () => {
  return (
    <div>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2000)
            .typeString(`Jarigyani's<br>portfolio`)
            .start()
        }}
      />
    </div>
  )
}
export default TypeTitle
