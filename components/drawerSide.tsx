const DrawerSide = () => {
  return (
    <>
      <label htmlFor="my-drawer" className="drawer-overlay"></label>
      <ul className="menu w-80 overflow-y-auto bg-black p-4 text-base-content">
        <li>
          <label htmlFor="my-drawer" className="drawer-button btn-primary btn">
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
    </>
  )
}

export default DrawerSide
