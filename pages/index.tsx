import DrawerSide from '@/drawerSide'
import Navbar from '@/navbar'
import PixelImage from '@/pixelImage'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      <div className="drawer font-dot font-bold">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Navbar />
          <PixelImage></PixelImage>
        </div>
        <div className="drawer-side">
          <DrawerSide />
        </div>
      </div>
    </>
  )
}

export default Home
