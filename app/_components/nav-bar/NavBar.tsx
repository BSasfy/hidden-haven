"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileNavBar } from "./MobileNavBar";

export function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathName = usePathname();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathName]);

  return (
    <nav className="bg-[#181818]">
      <div className="mx-auto flex max-w-screen-xl flex-wrap p-3">
        {/* mobile navbar */}
        <div className="w-full md:hidden">
          <div className="flex justify-between">
            <Link href="/" className="flex space-x-3 justify-self-end">
              <img
                src="/logo-with-text.png"
                className="relative right-0 w-[250px] sm:w-[330px] md:hidden"
                alt="Hidden Haven Logo"
              />
            </Link>
            <div
              data-mobilenavbar={isMobileMenuOpen}
              className="h-87vh absolute bottom-0 z-10 w-full p-0 data-[mobilenavbar=false]:hidden"
            >
              <MobileNavBar />
            </div>
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="flex flex-col items-center justify-center p-4 md:hidden"
            >
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen
                    ? "translate-y-1 rotate-45"
                    : "-translate-y-0.5"
                }`}
              ></span>
              <span
                className={`my-0.5 block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              ></span>
              <span
                className={`block h-0.5 w-6 rounded-sm bg-white transition-all duration-300 ease-out ${
                  isMobileMenuOpen
                    ? "-translate-y-1 -rotate-45"
                    : "translate-y-0.5"
                }`}
              ></span>
            </button>
          </div>
        </div>
        {/* desktop navbar */}
        <div className="hidden w-full justify-items-center md:block md:w-full md:max-w-7xl">
          <ul className="flex w-full flex-col justify-between border p-4 font-medium md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0">
            <li className="content-center">
              <Link
                href="/about"
                className="block px-3 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                About
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
            <Link href="/" className="flex space-x-3">
              <img
                src="/logo-with-text.png"
                className="w-[330px]"
                alt="Hidden Haven Logo"
              />
            </Link>
            <li className="content-center">
              <Link
                href="/services"
                className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Services
              </Link>
            </li>
            <li className="content-center">
              {/* <Link
                href="/services-list"
                className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Book
              </Link> */}
            </li>
            <li className="content-center">
              <Link
                href="https://the-haven-shop.square.site/s/appointments"
                className="block px-3 py-2 text-xl font-thin text-[#C9AC7C] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Book
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
