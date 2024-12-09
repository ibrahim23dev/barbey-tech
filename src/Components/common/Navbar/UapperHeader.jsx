import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";

const UpperHeader = () => {
  return (
    <div className=" bg-white text-gray-800 py-2 px-4 flex justify-center items-center">
      <div className="flex items-center mt-1 mb-1 gap-10">
        <span className="flex items-center gap-[5px]">
          <MdMarkEmailUnread className=" w-8 h-8 text-[#9747FF]"/>
          <span>user@barbeytech.com</span>
        </span>
         <div className="border-l-2 border-gray-300 h-6"></div>
        <span className="flex items-center gap-[5px]">
         <IoLogoWhatsapp className=" w-8 h-8 text-[#9747FF]"/>
          <span>+123456789</span>
        </span>
         <div className="border-l-2 border-gray-300 h-6"></div>
        <span className="flex items-center gap-[5px]">
          <FaLocationDot className=" w-8 h-8 text-[#9747FF]" />
          <span>+123456789</span>
      </span>
      </div>
    </div>
  );
};

export default UpperHeader;
