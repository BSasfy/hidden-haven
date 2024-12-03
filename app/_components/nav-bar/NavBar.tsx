"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MobileNavBar } from "./MobileNavBar";

export function NavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="bg-[#181818]">
      <div className="mx-auto flex max-w-screen-xl flex-wrap p-3">
        <div>
          {/* Hamburger menu button */}
          {/* <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-300 focus:outline-none focus:ring-2 md:hidden"
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen);
            }}
          >
            <span className="sr-only">Open main menu</span>
          </button> */}
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
          <div
            data-mobilenavbar={isMobileMenuOpen}
            className="absolute z-10 h-full w-full p-0 data-[mobilenavbar=false]:hidden"
          >
            <MobileNavBar />
          </div>
        </div>

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
                href="/contact-us"
                className="block px-3 py-2 text-xl font-thin text-[#FFFBF2] hover:text-[#FFFBF2] md:border-0 md:hover:bg-transparent md:hover:text-blue-500 lg:text-3xl"
              >
                Contact
              </a>
            </li>
            <Link href="/" className="flex space-x-3">
              <img
                src="/logo-with-text.png"
                className="w-[330px]"
                alt="Hidden Haven Logo"
              />
            </Link>
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
