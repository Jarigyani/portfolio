import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function SplineModel() {
  return (
    <div className="h-full will-change-auto">
      <motion.div
        className={`h-full`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <Spline scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode" />
      </motion.div>
    </div>
  )
}
