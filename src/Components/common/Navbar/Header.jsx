import React from "react";
import logo from '@/Assets/logo.png';
import Image from "next/image";
const Header = () => {
  return (
    <div className="bg-blue-700 text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-2xl font-bold">
          <Image src={logo} className=" w-[150px]"/>
        </div>
        <nav className="flex gap-6 text-sm">
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
        </nav>
      </div>
    </div>
  );
};

export default Header;
