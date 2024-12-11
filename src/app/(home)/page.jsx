'use client';

import { useState, useEffect } from "react";
import UpperHeader from "@/Components/common/Navbar/UapperHeader";
import Header from "@/Components/common/Navbar/Header";
import Services from "@/Components/Home/Services/services";
import Soluations from "@/Components/Home/Services/soluation";
import Techonologies from "@/Components/Home/Services/techonologies";
import Footer from "@/Components/common/Footer/Footer";
import Proatfolio from "@/Components/Home/proatfolio/protfolio";
import Partner from "@/Components/Home/Partner/partner";
import Testmoinal from "@/Components/Home/Testmonial/Testmoinal";
import Image from "next/image";
import Banner1 from '@/Assets/Banner/Banner1.jpeg';
import Banner2 from '@/Assets/Banner/Banner2.jpeg';
import Banner3 from '@/Assets/Banner/Banner3.jpeg';

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: Banner1, alt:"Hello", title: "Welcome to Barbey Tech", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Leo eget suspendisse sollicitudin consectetur." },
    { src: Banner2, alt:"Hello", title: "Smart Solutions for a Connected World", description: "Aliquet in id id ullamcorper pulvinar dolor amet. Augue pretium amet platea eu sit sit." },
    { src: Banner3, alt:"Hello", title: "Innovative Technology, Seamless Experience", description: "Tristique etiam quis bibendum duis mauris dictum molestie enim ut. Elementum tempus adipiscing nulla." }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <UpperHeader />
      <Header />
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Banner Image */}
        <Image
          src={images[currentImage].src}
          alt="Alhamdullah"
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-700"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 md:px-8 lg:px-16 text-center">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">{images[currentImage].title}</h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg max-w-2xl">{images[currentImage].description}</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition-all duration-300">
            Start Now
          </button>
        </div>
        {/* Dot Indicators */}
        <div className="absolute bottom-4 w-full flex justify-center space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImage ? 'bg-white scale-125' : 'bg-gray-400'}`}
              onClick={() => setCurrentImage(index)}
            />
          ))}
        </div>
      </div>
      {/* Sections */}
      <div >
        <Services />
        <Soluations />
        <Techonologies />
        <Proatfolio />
        <Partner />
        <Testmoinal />
      </div>
      <Footer />
    </>
  );
};

export default Home;
