import { useState } from 'react'
import Typical from 'react-typical'

const TypicalAnim = () => {
  const [start, setStart] = useState(false)
  setTimeout(() => {
    setStart(true)
  }, 2000)
  return (
    <div className="text-9xl text-white">
      {start && (
        <Typical
          steps={["Jarigyani's site", 2000, "Jarigyani's portfolio", 1000]}
          loop={Infinity}
          wrapper="p"
        />
      )}
    </div>
  )
}
export default TypicalAnim
