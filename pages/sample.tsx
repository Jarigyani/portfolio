import DrawImage from '@/drawImages'
import { motion } from 'framer-motion'
import { NextPage } from 'next'

const Sample: NextPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <DrawImage />
    </motion.div>
  )
}

export default Sample
