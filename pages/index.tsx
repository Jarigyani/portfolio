import PixelImage from '@/pixelImage'
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
      <PixelImage></PixelImage>
    </motion.div>
  )
}
export default Home
