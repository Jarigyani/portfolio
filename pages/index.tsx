import PixelImage from '@/pixelImage'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="navbar absolute top-0 bg-base-100 bg-transparent">
            <div className="flex-none">
              <label
                htmlFor="my-drawer"
                className="btn-ghost drawer-button btn-square btn"
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
              <a href={'/'} className="btn-ghost btn text-xl normal-case">
                Jarigyani
              </a>
            </div>
            <div className="mr-5 flex-none">
              <img
                className="w-10 rounded-full border-2 border border-green-500"
                src="https://avatars.githubusercontent.com/u/98578563?s=400&u=557c7d92e931654fef9799f571cf0d9ba222e6ed&v=4"
                alt="icon"
              />
            </div>
          </div>
          <PixelImage></PixelImage>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu w-80 overflow-y-auto bg-black p-4 text-base-content">
            <li>
              <label
                htmlFor="my-drawer"
                className="btn-primary drawer-button btn"
              >
                Close
              </label>
            </li>
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Home
