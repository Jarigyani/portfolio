const DrawerSide = () => {
  return (
    <>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu w-80 overflow-y-auto bg-black p-4 text-base-content">
        <li>
          <label
            htmlFor="my-drawer"
            className="drawer-button w-max text-3xl hover:bg-primary hover:text-white"
          >
            Close
          </label>
        </li>
        <li>
          <a className="text-3xl hover:text-white">Sidebar Item 1</a>
        </li>
        <li>
          <a className="text-3xl hover:text-white">Sidebar Item 2</a>
        </li>
      </ul>
    </>
  )
}

export default DrawerSide
