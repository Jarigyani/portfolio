import { motion } from 'framer-motion'
import { FC } from 'react'

type Props = {
  name: string
  progress: number
}
const Progress: FC<Props> = (props) => {
  return (
    <li>
      <p className="text-lg">{props.name}</p>
      <div
        className="tooltip tooltip-primary w-full md:tooltip-left"
        data-tip={props.progress}
      >
        <progress
          className="progress progress-primary bg-slate-100"
          value={props.progress}
          max="100"
        />
      </div>
    </li>
  )
}

const SkillProgress = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="m-5"
    >
      <div className="my-12 mx-auto md:max-w-[900px]">
        <h2 className="my-5 text-3xl md:text-6xl">Languages</h2>
        <ul>
          <Progress name="JavaScript" progress={90} />
          <Progress name="Dart" progress={80} />
          <Progress name="TypeScript" progress={70} />
          <Progress name="Go" progress={50} />
        </ul>
      </div>
      <div className="my-12 mx-auto md:w-[900px]">
        <h2 className="my-5 text-3xl md:text-6xl">Frameworks/Libraries</h2>
        <ul>
          <Progress name="React" progress={80} />
          <Progress name="Next" progress={70} />
          <Progress name="Flutter" progress={70} />
          <Progress name="Node" progress={60} />
          <Progress name="Nest" progress={40} />
        </ul>
      </div>
      <div className="my-12 mx-auto md:w-[900px]">
        <h2 className="my-5 text-3xl md:text-6xl">Services</h2>
        <ul>
          <Progress name="Supabase" progress={70} />
          <Progress name="Firebase" progress={70} />
          <Progress name="GCP" progress={60} />
          <Progress name="AWS" progress={20} />
        </ul>
      </div>
    </motion.div>
  )
}

export default SkillProgress
