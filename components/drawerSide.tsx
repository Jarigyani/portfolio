import { useRouter } from 'next/router'
import { FC } from 'react'

const DrawerSide: FC = () => {
  const router = useRouter()
  function pageOneClick() {
    router.push('/sample')
  }

  return (
    <>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu w-80 overflow-y-auto border-r-2 border-base-100 p-4 text-base-content backdrop-blur-md">
        <li>
          <label
            htmlFor="my-drawer"
            className="drawer-button w-max text-3xl hover:bg-primary hover:text-white"
          >
            Close
          </label>
        </li>
        <li className="text-3xl">
          <label
            htmlFor="my-drawer"
            className="drawer-button hover:text-white"
            onClick={pageOneClick}
          >
            Sidebar Item 1
          </label>
        </li>
        <li>
          <a className="text-3xl hover:text-white">Sidebar Item 2</a>
        </li>
      </ul>
    </>
  )
}

export default DrawerSide
