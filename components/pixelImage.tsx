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

  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setSize(() => parseInt(e.target.value))
  // }

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

  // const countUp = () => {
  //   const speed = 40
  //   let num = size
  //   setInterval(function () {
  //     if (num > 3) {
  //       setSize(num - 1)
  //       num -= 1
  //     }
  //   }, speed)
  // }

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

  // const shadow = {
  //   color: '#fff',
  //   textShadow: `
  // 	0 0 7px #fff,
  //   0 0 10px #fff,
  //   0 0 21px #fff,
  //   0 0 42px #CCFFFF,
  //   0 0 82px #CCFFFF,
  //   0 0 92px #CCFFFF,
  //   0 0 102px #CCFFFF,
  //   0 0 151px #CCFFFF`,
  //   animation: `pulsate 1.5s infinite alternate`,
  // }

  return (
    <>
      {/* <style>
        {`@keyframes pulsate {
  				100% {
					text-shadow:
					0 0 4px #fff,
					0 0 11px #fff,
					0 0 19px #fff,
					0 0 40px #0fa,
					0 0 80px #0fa,
					0 0 90px #0fa,
					0 0 100px #0fa,
					0 0 150px #0fa;
				}
				0% {
					text-shadow:
					0 0 2px #fff,
					0 0 4px #fff,
					0 0 6px #fff,
					0 0 10px #0fa,
					0 0 45px #0fa,
					0 0 55px #0fa,
					0 0 70px #0fa,
					0 0 80px #0fa;
				}
			}`}
      </style> */}
      <div className="relative z-0 h-screen w-screen">
        <PixelateImage src="/images/yoshinoya.jpg" size={size} enabled={true} />
        <p
          className="absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2 text-center text-9xl text-white"
          // style={shadow}
        >
          Jarigyani&apos;s
          <br />
          portfolio site
        </p>
      </div>
      {/* <input
        type="range"
        min="3"
        max="30"
        value={size}
        className="range"
        onChange={handleOnChange}
      /> */}
      {/* <label className="btn" onClick={countUp}>
        click
      </label> */}
    </>
  )
}
