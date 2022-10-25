import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { motion, useAnimation } from 'framer-motion'
import useGetWindowSize from 'hooks/getWindowSize'

const SplineModel = () => {
  const controls = useAnimation()
  const windowSize = useGetWindowSize()
  console.log(windowSize.width)

  const onload = (e: Application, size: number) => {
    controls.start({ opacity: 1 })
    e.setZoom(size)
  }

  return (
    <div className="h-full">
      {windowSize.width <= 767 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={controls}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="h-full"
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
          transition={{ duration: 1 }}
          className="h-full"
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
