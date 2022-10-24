import SplineModel from '@/splineModel'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative md:static"
    >
      <div className="h-96 w-screen bg-base-100 md:absolute md:h-screen">
        <SplineModel />
      </div>
    </motion.div>
  )
}
export default Home
