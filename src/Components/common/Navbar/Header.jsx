import React, { useState } from "react";
import Image from "next/image";
import logo from "@/Assets/logo.png";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-gradient-to-r from-[#AD37E3] to-[#7581F7] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto max-w-screen-lg flex justify-between items-center py-4 px-4 md:px-6">
        {/* Logo */}
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={150} height={50} />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-4 items-center text-sm">
          {["Services", "We Do", "Product", "Portfolio", "Partnership Program", "Hire Developer", "Contact Us"].map(
            (item, index) => (
              <a key={index} href="#" className="hover:underline">
                {item}
              </a>
            )
          )}
          <a href="#" className="hover:underline flex items-center">
            <FaRegUser className="text-rose-50 w-6 h-6" />
          </a>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#AD37E3] to-[#7581F7] px-4 py-4">
          <nav className="flex flex-col gap-4 text-sm">
            {["Services", "We Do", "Product", "Portfolio", "Partnership Program", "Hire Developer", "Contact Us"].map(
              (item, index) => (
                <a key={index} href="#" className="hover:underline">
                  {item}
                </a>
              )
            )}
            <a href="#" className="hover:underline flex items-center">
              <FaRegUser className="text-rose-50 w-6 h-6" />
            </a>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
