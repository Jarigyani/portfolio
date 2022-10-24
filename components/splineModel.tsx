import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function SplineModel() {
  const [visible, setVisible] = useState(false)

  const onload = () => {
    setVisible(true)
  }
  return (
    <div className="h-full will-change-auto">
      <div className="hidden">
        <Spline
          scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode"
          onLoad={onload}
        />
      </div>

      {visible && (
        <motion.div
          className={`h-full`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
        >
          <Spline scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode" />
        </motion.div>
      )}
    </div>
  )
}
