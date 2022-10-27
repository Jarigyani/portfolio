import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'

const TypeWorks = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none absolute bottom-10 left-1/2 w-max -translate-x-1/2 rounded-xl bg-white/[.06] text-2xl leading-snug tracking-wider backdrop-blur-md md:text-6xl"
    >
      <div className="mx-5 pb-1 md:pb-3">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(`My works ↓`).start()
          }}
        />
      </div>
    </motion.div>
  )
}
export default TypeWorks