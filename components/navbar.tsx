const Navbar = () => {
  return (
    <div className="navbar absolute top-0">
      <div className="flex-none">
        <label
          htmlFor="my-drawer"
          className="drawer-button btn-ghost btn-square btn"
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
          className="w-10 rounded-full border-2 border-green-500 bg-base-300"
          src="https://avatars.githubusercontent.com/u/98578563?s=400&u=557c7d92e931654fef9799f571cf0d9ba222e6ed&v=4"
          alt="icon"
        />
      </div>
    </div>
  )
}

export default Navbar
