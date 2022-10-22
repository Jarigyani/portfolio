import { FC, useState } from 'react'

type Props = {
  src: string
  size: number
  enabled: boolean
}

const PixelateImage: FC<Props> = ({ src, size, enabled }) => (
  <>
    <svg style={{ width: '100%', height: '100%' }}>
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
      />
    </svg>
  </>
)

export default function PixelImage() {
  const [size, setSize] = useState(30)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(() => parseInt(e.target.value))
  }

  const countUp = () => {
    const speed = 40
    let num = size
    setInterval(function () {
      if (num > 3) {
        setSize(num - 1)
        num -= 1
      }
    }, speed)
  }

  // useEffect(() => {
  //   if (size < 10) {
  //     const speed = 150
  //     let num = size
  //     setInterval(function () {
  //       if (num > 3) {
  //         setSize(num - 1)
  //         num -= 1
  //       }
  //     }, speed)
  //   }
  // }, [size])

  return (
    <>
      <PixelateImage
        src="https://cdn.pixabay.com/photo/2021/03/02/01/07/cyberpunk-6061251_1280.jpg"
        size={size}
        enabled={true}
      />
      <input
        type="range"
        min="3"
        max="30"
        value={size}
        className="range"
        onChange={handleOnChange}
      />
      <label className="btn" onClick={countUp}>
        click
      </label>
    </>
  )
}
