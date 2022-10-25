import Typewriter from 'typewriter-effect'

const TypeTitle = () => {
  return (
    <div className="mx-5 mb-3">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .pauseFor(2000)
            .typeString(`Jarigyani's portfolio site`)
            .start()
        }}
      />
    </div>
  )
}
export default TypeTitle
