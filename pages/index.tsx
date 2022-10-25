import SplineModel from '@/splineModel'
import TypeTitle from '@/typeTitle'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="h-screen"
    >
      <div className="relative left-1/2 top-1/3 h-[400px] w-[400px] -translate-y-1/2 -translate-x-1/2 bg-base-100 md:absolute md:top-0 md:h-[560px] md:w-[560px] md:translate-y-0">
        <SplineModel />
        <div className="pointer-events-none absolute bottom-10 left-1/2 w-max -translate-x-1/2 rounded-3xl bg-white/[.06] text-2xl leading-snug tracking-wider drop-shadow-lg backdrop-blur-md md:text-6xl">
          <TypeTitle />
        </div>
      </div>
    </motion.div>
  )
}
export default Home
