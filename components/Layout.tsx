import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Typewriter from 'typewriter-effect'

type Props = {
  text: string
  children?: ReactNode
}
const Layout = ({ text, children }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="pointer-events-none m-auto -mt-24 w-max rounded-xl bg-white/[.06] text-2xl leading-snug tracking-wider backdrop-blur-md md:text-6xl">
        <div className="mx-5 pb-1 md:pb-3">
          <Typewriter
            onInit={(typewriter) => {
              typewriter.pauseFor(1000).typeString(text).start()
            }}
          />
        </div>
      </h1>
      <div>{children}</div>
    </motion.div>
  )
}

export default Layout
