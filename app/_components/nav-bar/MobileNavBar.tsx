import Link from "next/link";

export function MobileNavBar() {
  return (
    <div className="fixed left-0 top-[70px] flex h-[87vh] w-full bg-[#181818] sm:top-[90px]">
      <div className="w-full justify-items-center text-center md:block md:w-full md:max-w-7xl">
        <ul className="flex w-full flex-col justify-between font-medium md:mt-0 md:flex-row md:space-x-8">
          <li className="content-center">
            <Link
              href="/"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              Home
            </Link>
          </li>
          <li className="content-center">
            <Link
              href="/about"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              About Us
            </Link>
          </li>
          <li className="content-center">
            <Link
              href="/contact-us"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              Contact
            </Link>
          </li>
          <li className="content-center">
            <Link
              href="/services"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              Services
            </Link>
          </li>
          <li className="content-center">
            <Link
              href="https://the-haven-shop.square.site/s/appointments"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              Book
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
