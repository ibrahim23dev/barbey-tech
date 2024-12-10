"use client";
import Image from "next/image";
import { useState } from "react";
import Tech1 from "@/Assets/Tech/tech1.png";
import Tech2 from "@/Assets/Tech/tech2.png";
import Tech3 from "@/Assets/Tech/tech3.png";
import Tech4 from "@/Assets/Tech/tech4.png";
import Tech5 from "@/Assets/Tech/tech5.png";
import Tech6 from "@/Assets/Tech/tech6.png";

const services = [
  {
    title: "Web Development",
    description:
      "Build fast, modern, and responsive websites tailored to your needs.",
    image: Tech1,
  },
  {
    title: "Software Development",
    description:
      "Custom software solutions to streamline your business processes.",
    image: Tech2,
  },
  {
    title: "ERP & Digital Core",
    description:
      "Optimize operations with advanced ERP and digital transformation.",
    image: Tech3,
  },
  {
    title: "Web Design",
    description:
      "Craft beautiful, user-friendly interfaces with stunning designs.",
    image: Tech4,
  },
  {
    title: "UI/UX Design",
    description:
      "Enhance user experience with intuitive and visually appealing designs.",
    image: Tech5,
  },
  {
    title: "Graphic Design",
    description:
      "Creative graphic solutions for branding and marketing needs.",
    image: Tech6,
  },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="bg-gray-100 py-10">
      {/* Header Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-800 leading-snug">
          Smart, Preconfigured,{" "}
          <span className="text-purple-500">Dynamic Business Solutions</span>
        </h1>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`p-4 bg-white rounded-lg md:w-[500px] lg:w-[500px] shadow-lg w-[444px] h-[500px] max-w-lg transition-all duration-300 ${
                hoveredIndex === index ? "bg-purple-50" : "bg-white"
              }`}
            >
              {hoveredIndex === index ? (
                // Detailed View
                <div className="flex flex-col items-center justify-between h-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    className="w-20 h-20 object-contain mb-4"
                  />
                  <h2 className="text-center text-lg font-semibold text-gray-700">
                    {service.title}
                  </h2>
                  <p className="text-center text-sm text-gray-600 mt-2">
                    {service.description}
                  </p>
                  <button className="mt-4 bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600 transition-all">
                    Details
                  </button>
                </div>
              ) : (
                // Static View
                <div className="flex flex-col items-center justify-center h-full">
                  <Image
                      src={service.image}
                      
                    alt={service.title}
                    className="w-40 h-32 object-contain mb-4"
                  />
                  <h2 className="text-center text-lg font-semibold text-gray-700">
                    {service.title}
                  </h2>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
