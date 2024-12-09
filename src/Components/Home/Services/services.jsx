// pages/index.js
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
    image: Tech1, // Use imported image directly
  },
  {
    title: "Software Development",
    image: Tech2,
  },
  {
    title: "ERP & Digital Core",
    image: Tech3,
  },
  {
    title: "Web Design",
    image: Tech4,
  },
  {
    title: "UI/UX Design",
    image: Tech5,
  },
  {
    title: "Graphic Design",
    image: Tech6,
  },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">
          Empowering Efficiency,{" "}
          <span className="text-purple-500">One Click at a Time</span>
        </h1>
      </div>

      {/*  */}

      <section id="#section">
        <div className="container mx-auto p-4">
          <div>header</div>
          <div>grid</div>
        </div>
      </section>

      {/* Service Cards */}
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`group relative p-6 bg-white rounded-lg shadow-lg border-2 ${
              hoveredIndex === index
                ? "border-purple-500"
                : "border-transparent"
            } transition-transform transform hover:scale-105`}
          >
            {/* Image */}
            <div className="w-full flex justify-center">
              <Image
                src={service.image}
                alt={service.title}
                width={120}
                height={120}
                className="transition-all duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h2 className="text-center text-xl font-semibold text-gray-700 mt-4">
              {service.title}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
