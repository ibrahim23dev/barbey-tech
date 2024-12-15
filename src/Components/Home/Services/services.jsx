// pages/index.js
"use client";

import Image from "next/image";
import Tech1 from "@/Assets/Tech/tech1.png";
import Tech2 from "@/Assets/Tech/tech2.png";
import Tech3 from "@/Assets/Tech/tech3.png";
import Tech4 from "@/Assets/Tech/tech4.png";
import Tech5 from "@/Assets/Tech/tech5.png";
import Tech6 from "@/Assets/Tech/tech6.png";

const solutions = [
  {
    title: "Hospital Management System",
    description: "Manage hospital operations efficiently with our HMS solution.",
    image: Tech1,
  },
  {
    title: "Inventory Management System",
    description: "Optimize inventory with our modern IMS tools.",
    image: Tech2,
  },
  {
    title: "School Management System",
    description: "Streamline school administration with our SMS solution.",
    image: Tech3,
  },
  {
    title: "Stock Management System",
    description: "Track and manage stock accurately with ease.",
    image: Tech4,
  },
  {
    title: "Hotel & Restaurant Management",
    description: "Simplify hotel operations with our H&R solutions.",
    image: Tech5,
  },
  {
    title: "Research Solution",
    description: "Empower research with our intelligent tools.",
    image: Tech6,
  },
];

function Services() {
  return (
    <div className="bg-gray-100 min-h-screen px-10 pt-10">
      <h1 className="text-2xl text-center mb-10 sm:text-3xl md:text-4xl font-bold text-gray-800">
        Empowering Efficiency,{" "}
        <span className="text-purple-500">One Click at a Time</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 md:px-16">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="relative group h-[300px] bg-white rounded-lg border border-gray-200 shadow-lg hover:shadow-2xl transition duration-300 transform hover:scale-105"
          >
            <div className="p-6 text-center">
              <div className="flex justify-center mb-4">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={190}
                  height={190}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {solution.title}
              </h3>
              <p className="text-sm text-gray-600">{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
