import DrawerSide from '@/drawerSide'
import Layout from '@/layout'
import Navbar from '@/navbar'
import PixelImage from '@/pixelImage'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
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
    </Layout>
  )
}

export default Home
