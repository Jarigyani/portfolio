import { motion } from 'framer-motion'
import { FC, useEffect, useState } from 'react'

type Props = {
  src: string
  size: number
  enabled: boolean
}

const PixelateImage: FC<Props> = ({ src, size, enabled }) => (
  <>
    <svg className="relative h-full w-full bg-black">
      <filter id="pixelate" x="0" y="0">
        <feFlood x={4} y={4} height={3} width={3} />
        <feComposite width={size * 2} height={size * 2} />
        <feTile result="a" />
        <feComposite in="SourceGraphic" in2="a" operator="in" />
        <feMorphology operator="dilate" radius={size} />
      </filter>

      <image
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        filter={enabled ? 'url(#pixelate)' : ''}
        href={src}
        className={'opacity-70'}
      />
    </svg>
  </>
)

export default function PixelImage() {
  const [size, setSize] = useState(30)

  useEffect(() => {
    const speed = 40
    let num = size
    setInterval(function () {
      if (num > 3) {
        setSize(num - 1)
        num -= 1
      }
    }, speed)
  }, [size])

  return (
    <>
      <div className="relative z-0 h-screen w-screen">
        <PixelateImage src="/images/yoshinoya.jpg" size={size} enabled={true} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 1 }}
          className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-5xl text-white md:text-9xl"
        >
          Jarigyani&apos;s
          <br />
          portfolio site
        </motion.p>
      </div>
    </>
  )
}
