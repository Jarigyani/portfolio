import { motion } from 'framer-motion'
import Link from 'next/link'
import SwapTheme from './swapTheme'

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -70 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      className="navbar absolute top-0 z-10 m-auto backdrop-blur-sm"
    >
      <div className="mx-auto w-full max-w-[900px]">
        <div className="flex-none">
          <label
            htmlFor="my-drawer"
            className="btn-ghost drawer-button btn-square btn hover:text-white md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div className="flex-1">
          <Link href={'/'}>
            <div className="btn-ghost btn text-3xl normal-case hover:text-white">
              Jarigyani
            </div>
          </Link>
        </div>
        <div className="flex-2 hidden md:flex">
          <Link href={'/404'}>
            <div className="btn-ghost btn text-3xl normal-case hover:text-white">
              404
            </div>
          </Link>
        </div>
        <div className="flex-2 hidden md:flex">
          <Link href={'/skills'}>
            <div className="btn-ghost btn text-3xl normal-case hover:text-white">
              Skills
            </div>
          </Link>
        </div>
        <div className="flex-2 hidden md:flex">
          <Link href={'/works'}>
            <div className="btn-ghost btn text-3xl normal-case hover:text-white">
              Works
            </div>
          </Link>
        </div>
        <div className="m-auto flex-none">
          <SwapTheme />
          <Link
            href="https://github.com/Jarigyani"
            target="_blank"
            rel="noreferrer noopener"
            className="btn-ghost btn"
          >
            <div className="tooltip tooltip-bottom" data-tip="Github">
              <div className="btn-ghost btn">
                <img
                  className="w-10 rounded-full border-2 border-green-500 bg-base-300"
                  src="https://avatars.githubusercontent.com/u/98578563?s=400&u=557c7d92e931654fef9799f571cf0d9ba222e6ed&v=4"
                  alt="icon"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default Navbar
