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
  // Randomly generated data
  const randomEmail = "user" + Math.floor(Math.random() * 1000) + "@example.com";
  const randomPhone = "+1" + Math.floor(Math.random() * 1000000000);
  const randomLocation = "Street " + (Math.floor(Math.random() * 100) + 1) + ", City " + (Math.floor(Math.random() * 10) + 1) + ", Country";
  
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

  // Data for the header items with randomized content
  const headerItems = [
    {
      icon: <MdMarkEmailUnread className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: randomEmail,
    },
    {
      icon: <IoLogoWhatsapp className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: randomPhone,
    },
    {
      icon: <FaLocationDot className="w-6 h-6 md:w-8 md:h-8 text-[#9747FF]" />,
      text: randomLocation,
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
      <div className="w-full ml-10 max-w-[1000px]">
        <Slider {...settings}>
          {headerItems.map((item, index) => (
            <div key={index} className="flex justify-center items-center px-2 relative">
              <div className="flex items-center gap-4 text-center">
                <span className="flex items-center gap-2">
                  {item.icon}
                  <span className="text-sm md:text-lg font-medium">{item.text}</span>
                </span>
                {/* Separator / Bearer */}
              {index < headerItems.length && (
                <div className="absolute inset-y-0 right-0 w-[1px] bg-gray-300" />
              )}
              </div>
              
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default UpperHeader;
