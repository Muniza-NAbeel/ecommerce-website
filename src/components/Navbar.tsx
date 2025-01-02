'use client';
import Image from "next/image";
import Link from "next/link";
import { IoMdCart } from "react-icons/io";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full body-font bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-6 items-center justify-between max-w-7xl">
        {/* Logo */}
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 sm:mb-0">
          <Image alt="logo" src="/Vector.png" width="25" height="25" />
          <span className="ml-3 text-xl font-extrabold">Fashion</span>
        </a>

        {/* Hamburger Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden ml-auto text-2xl text-black focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link
            href="/"
            className="hover:text-[#EBD96B] text-base relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#EBD96B] hover:after:w-full after:transition-all after:duration-300"
          >
            Home
          </Link>

          <Link
            href="/category"
            className="hover:text-[#EBD96B] text-base relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#EBD96B] hover:after:w-full after:transition-all after:duration-300"
          >
            Category
          </Link>

          <Link
            href="/contact"
            className="hover:text-[#EBD96B] text-base relative transition-all duration-300 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-[#EBD96B] hover:after:w-full after:transition-all after:duration-300"
          >
            Contact
          </Link>

          <Link href="/cart">
            {/* Cart Icon */}
            <IoMdCart className="text-xl font-bold cursor-pointer hover:text-[#EBD96B] duration-300" />
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:text-[#EBD96B] focus:outline-none"
          >
            {isOpen ? (
              <i className="bx bx-x text-3xl hover:border-2 border-solid border-gray-600 p-1"></i> // Close Icon
            ) : (
              <i className="bx bx-menu text-3xl hover:border-2 border-solid border-gray-600 p-1"></i> // Hamburger Icon
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#EBD96B] rounded-lg">
            <Link
              href="/"
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-white duration-300"
            >
              Home
            </Link>
            <Link
              href="/category"
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-white duration-300"
            >
              Category
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium cursor-pointer hover:bg-white duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

