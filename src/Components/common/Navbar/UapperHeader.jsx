import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { BiSolidContact } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const UpperHeader = () => {
  // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0px",
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 768, // For mobile devices
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
    ],
  };

  // Data for the header items
  const headerItems = [
    {
      icon: <MdMarkEmailUnread className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: "user@barbeytech.com",
    },
    {
      icon: <IoLogoWhatsapp className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: "+123456789",
    },
    {
      icon: <FaLocationDot className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: "1234 Street Name, City, Country",
    },
    {
      icon: <MdOutlineAccessTimeFilled className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: "Mon - Fri: 9 AM - 6 PM",
    },
    {
      icon: <BiSolidContact className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: "Contact Us",
    },
  ];

  return (
    <div className="bg-white text-gray-800 py-3 px-4 flex justify-center items-center">
      <div className="w-full max-w-[1200px]">
        <Slider {...settings}>
          {headerItems.map((item, index) => (
            <div key={index} className="flex justify-center items-center px-2">
              <div className="flex items-center gap-4 text-center">
                <span className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm md:text-lg font-medium">{item.text}</span>
                </span>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpperHeader;
