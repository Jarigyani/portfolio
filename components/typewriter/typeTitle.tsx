import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const TypeTitle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none m-auto -mt-20 w-max rounded-xl bg-white/[.06] text-2xl leading-snug tracking-wider backdrop-blur-md md:text-6xl"
    >
      <div className="mx-5 mb-1 md:mb-3">
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
      </div>
    </motion.div>
  )
}
export default TypeTitle
