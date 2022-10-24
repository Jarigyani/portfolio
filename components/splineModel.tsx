import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { motion } from 'framer-motion'
import useGetWindowSize from 'hooks/getWindowSize'
import TypeTitle from './typeTitle'

export default function SplineModel() {
  const { height, width } = useGetWindowSize()
  console.log(height)

  const onloadSmall = (e: Application) => {
    if (width <= 767) {
      e.setZoom(1 / 2)
    }
  }

  return (
    <div className="h-full will-change-auto">
      {width <= 767 && (
        <motion.div
          className={`relative top-1/3 h-full`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Spline
            scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode"
            onLoad={(e) => {
              onloadSmall(e)
            }}
          />
          <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-6xl backdrop-blur-sm">
            <TypeTitle />
          </div>
        </motion.div>
      )}
      {width > 767 && (
        <motion.div
          style={{
            width: '800px',
            marginLeft: 'auto',
            height: '100%',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <Spline scene="https://prod.spline.design/umXHqIO9PqlFHs3L/scene.splinecode" />
          <div className="absolute left-10 text-6xl md:top-1/2 md:-translate-y-1/2 md:text-9xl">
            <TypeTitle />
          </div>
        </motion.div>
      )}
    </div>
  )
}
