import { useRouter } from 'next/router'
import { FC } from 'react'

const DrawerSide: FC = () => {
  const router = useRouter()
  function pageOneClick(locale: string) {
    router.push(`/${locale}`)
  }

  return (
    <>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu w-80 overflow-y-auto border-r-2 border-base-100 p-4 text-base-content backdrop-blur-md">
        <li>
          <label
            htmlFor="my-drawer"
            className="drawer-button w-max bg-primary text-3xl hover:bg-primary hover:text-white md:bg-base-100"
          >
            Close
          </label>
        </li>
        <li className="text-3xl">
          <label
            htmlFor="my-drawer"
            className="drawer-button hover:text-white"
            onClick={() => pageOneClick('skills')}
          >
            Skills
          </label>
        </li>
        <li className="text-3xl">
          <label
            htmlFor="my-drawer"
            className="drawer-button hover:text-white"
            onClick={() => pageOneClick('works')}
          >
            Works
          </label>
        </li>
      </ul>
    </>
  )
}

export default DrawerSide
