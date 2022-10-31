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
          <h2 className="mb-5 text-xl font-bold">バイクが好き</h2>
          <p>
            バイクは乗ってよし弄ってよし見てよしの三拍子が揃った最高の趣味です。
            <br />
            休日はよく遠出して平日の疲れを癒しています。特に疲れることはありませんが。
            <br />
            メインバイクは2019年製のGixxer150です。
            <br />
            かなりカスタムしておりノーマル時の面影はほぼありません。
            <br />
            かなり思い出の詰まった車体なので死ぬまで直しながら乗ることでしょう。
          </p>
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
