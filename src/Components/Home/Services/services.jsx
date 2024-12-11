// pages/index.js
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
    image: Tech1,
  },
  {
    title: "Inventory Management System",
    image: Tech2,
  },
  {
    title: "School Management System",
    image: Tech3,
  },
  {
    title: "Stock Management System",
    image: Tech4,
  },
  {
    title: "Hotel & Restaurant Management",
    image: Tech5,
  },
  {
    title: "Research Solution",
    image: Tech6,
  },
];

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen py-10">
      {/* Header */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Smart, Preconfigured,{" "}
          <span className="text-purple-500">Dynamic Business Solutions</span>
        </h1>
      </div>

      {/* Grid Layout */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center p-6 bg-white rounded-lg shadow-lg border-2 border-transparent transition-transform transform hover:scale-105 hover:border-purple-500"
          >
            {/* Image */}
            <div className="w-full flex justify-center">
              <Image
                src={solution.image}
                alt="hello"
                width={300}
                height={200}
                className="transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* Title */}
            <h2 className="text-center text-lg sm:text-xl font-semibold text-gray-700 mt-4">
              {solution.title}
            </h2>
            {/* Button */}
            <div className="text-center mt-4">
              <button className="px-4 py-2 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* See More Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-purple-500 text-white text-lg rounded-full shadow-lg hover:bg-purple-600 transition">
          See More
        </button>
      </div>
    </div>
  );
}
