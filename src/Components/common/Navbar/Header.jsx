import React, { useState } from "react";
import logo from "@/Assets/logo.png";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // React icons for hamburger menu

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for toggling the menu

  return (
    <div className="bg-gradient-to-r from-[#AD37E3] to-[#7581F7] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Image src={logo} alt="Logo" className="w-[150px]" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:underline">
            Services
          </a>
          <a href="#" className="hover:underline">
            We Do
          </a>
          <a href="#" className="hover:underline">
            Product
          </a>
          <a href="#" className="hover:underline">
            Portfolio
          </a>
          <a href="#" className="hover:underline">
            Partnership Program
          </a>
          <a href="#" className="hover:underline">
            Hire Developer
          </a>
          <a href="#" className="hover:underline">
            Contact Us
          </a>
          <a href="#" className="hover:underline flex items-center">
            <FaRegUser className="text-rose-50 w-6 h-6" />
          </a>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white text-2xl"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-r from-[#AD37E3] to-[#7581F7] px-6 py-4">
          <nav className="flex flex-col gap-4 text-sm">
            <a href="#" className="hover:underline">
              Services
            </a>
            <a href="#" className="hover:underline">
              We Do
            </a>
            <a href="#" className="hover:underline">
              Product
            </a>
            <a href="#" className="hover:underline">
              Portfolio
            </a>
            <a href="#" className="hover:underline">
              Partnership Program
            </a>
            <a href="#" className="hover:underline">
              Hire Developer
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
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
