import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'

const Introduction = () => {
  const controles = useAnimation()
  const onLoadImages = () => {
    controles.start({ opacity: 1, y: 0 })
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={controles}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="mx-auto mt-10 w-[310px] justify-between md:mt-20 md:flex md:w-[900px]"
      >
        <div className="max-w-[400px]">
          <h2 className="mb-5 text-xl font-bold">好きなもの</h2>
          <ul>
            <li>バイク</li>
            <li>わいわい</li>
            <li>ウルフルズ</li>
            <li>ゲーム</li>
          </ul>
        </div>
        <div className="mt-5">
          <Image
            src={'/images/bike.webp'}
            alt="bike"
            width={400}
            height={300}
            className="rounded-lg"
            onLoad={onLoadImages}
          />
        </div>
      </motion.div>
    </>
  )
}

export default Introduction
