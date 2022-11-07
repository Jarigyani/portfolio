import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}
const TypeTexts: FC<Props> = (props) => {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="pointer-events-none m-auto -mt-20 w-max rounded-xl bg-white/[.06] text-2xl leading-snug tracking-wider backdrop-blur-md md:text-6xl"
    >
      <div className="mx-5 pb-1 md:pb-3">{props.children}</div>
    </motion.h1>
  )
}
export default TypeTexts
