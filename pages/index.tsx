import SplineModel from '@/splineModel'
import TypicalAnim from '@/typicalAnim'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute h-screen w-screen bg-base-300">
        <SplineModel />
      </div>
      <div className="absolute top-20 left-10">
        <TypicalAnim />
      </div>
    </motion.div>
  )
}
export default Home
