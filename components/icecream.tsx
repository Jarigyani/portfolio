import Spline from '@splinetool/react-spline'
import { Application } from '@splinetool/runtime'
import { useState } from 'react'

export default function Icecream() {
  const [visible, setVisible] = useState(false)
  const handleOnLoad = (e: Application) => {
    console.log(e)
    !visible && setVisible(true)
  }
  return (
    <div className="">
      <Spline
        scene="https://prod.spline.design/PvlY4KG-Y2RZh01w/scene.splinecode"
        onLoad={(e) => {
          handleOnLoad(e)
        }}
      />
    </div>
  )
}
