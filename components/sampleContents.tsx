import { motion, useAnimation } from 'framer-motion'

const SampleContents = () => {
  const controles = useAnimation()
  const onLoadImages = () => {
    controles.start({ opacity: 1, y: 0 })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controles}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mx-auto max-w-[900px] md:flex">
        <div className="image-full card m-5 mx-auto w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              onLoad={() => onLoadImages()}
              src="https://placeimg.com/400/225/arch"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sample1!</h2>
            <p>自己紹介とか書いていきたい</p>
            <div className="card-actions justify-end">
              <button className="btn-primary btn">いいね</button>
            </div>
          </div>
        </div>
        <div className="image-full card m-5 mx-auto w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Sample2!</h2>
            <p>てかこのフォントダサすぎ</p>
            <div className="card-actions justify-end">
              <button className="btn-primary btn">よくないね</button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default SampleContents
