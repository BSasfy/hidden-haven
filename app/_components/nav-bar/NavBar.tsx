export function NavBar() {
  return (
    <nav className="bg-[#181818] xl:justify-items-center">
      <div className="flex max-w-screen-xl flex-wrap p-3">
        {/* Hamburger menu button */}
        {/* <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600 md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
        </button> */}
        <div className="hidden w-full justify-items-center md:block md:w-full md:max-w-7xl">
          <ul className="flex w-full flex-col justify-between border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li className="content-center">
              <a
                href="/about"
                className="block px-3 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                About Us
              </a>
            </li>
            <li className="content-center">
              <a
                href="/contact"
                className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Contact
              </a>
            </li>
            <a href="/" className="flex space-x-3">
              <img
                src="/logo-with-text.png"
                className="w-[330px]"
                alt="Hidden Haven Logo"
              />
            </a>
            <li className="content-center">
              <a
                href="/services"
                className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Services
              </a>
            </li>
            <li className="content-center">
              <a
                href="#"
                className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Book
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
