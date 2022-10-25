import SplineModel from '@/splineModel'
import TypeTitle from '@/typeTitle'
import { motion } from 'framer-motion'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        className="relative h-[400px] w-full bg-base-100 md:absolute md:h-[600px]"
      >
        <SplineModel />
        <TypeTitle />
      </motion.div>
    </>
  )
}
export default Home
