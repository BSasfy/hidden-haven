import Link from "next/link";

export function MobileNavBar() {
  return (
    <div className="fixed bottom-0 h-[87vh] w-full bg-[#181818]">
      <div className="w-full justify-items-center md:block md:w-full md:max-w-7xl">
        <ul className="flex w-full flex-col justify-between font-medium md:mt-0 md:flex-row md:space-x-8">
          <li className="content-center">
            <a
              href="/about"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              About Us
            </a>
          </li>
          <li className="content-center">
            <a
              href="/contact-us"
              className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
            >
              Contact
            </a>
          </li>
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
  );
}
