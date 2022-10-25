import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { motion } from 'framer-motion'
import useGetWindowSize from 'hooks/getWindowSize'
import { useState } from 'react'

const SplineModel = () => {
  const windowSize = useGetWindowSize()
  const [hidden, setHidden] = useState('invisible')

  const onload = (e: Application, size: number) => {
    e.setZoom(size)
    setHidden('')
  }

  return (
    <div className="h-full">
      {windowSize.width <= 767 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className={`h-full ${hidden}`}
        >
          <Spline
            scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode"
            onLoad={(e) => {
              onload(e, 0.5)
            }}
          />
        </motion.div>
      )}
      {windowSize.width > 767 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className={`h-full  ${hidden}`}
        >
          <Spline
            scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode"
            onLoad={(e) => {
              onload(e, 0.8)
            }}
          />
        </motion.div>
      )}
    </div>
  )
}

export default SplineModel
