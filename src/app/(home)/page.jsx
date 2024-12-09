'use client';

import UpperHeader from "@/Components/common/Navbar/UapperHeader";
import Header from "@/Components/common/Navbar/Header";
import Services from "@/Components/Home/Services/services";
import Soluations from "@/Components/Home/Services/soluation";
import Techonologies from "@/Components/Home/Services/techonologies";

import Image from "next/image";
import Banner1 from '@/Assets/Banner/Banner1.jpeg';
import Banner2 from '@/Assets/Banner/Banner2.jpeg';
import Banner3 from '@/Assets/Banner/Banner3.jpeg';
import { useState, useEffect } from "react";

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    { src: Banner1, title: "Welcome to Barbey Tech", description: "Lorem ipsum dolor sit amet consectetur. Leo eget suspendisse sollicitudin consectetur. Aliquet in id id ullamcorper pulvinar dolor amet. Augue pretium amet platea eu sit sit. In maecenas mi a urna posuere. Augue felis urna et in non sit augue. Tristique etiam quis bibendum duis mauris dictum molestie enim ut. Elementum tempus adipiscing praesent adipiscing nulla vitae nibh fermentum." },
    { src: Banner2, title: "Smart Solutions for a Connected World", description: "Lorem ipsum dolor sit amet consectetur. Leo eget suspendisse sollicitudin consectetur. Aliquet in id id ullamcorper pulvinar dolor amet. Augue pretium amet platea eu sit sit. In maecenas mi a urna posuere. Augue felis urna et in non sit augue. Tristique etiam quis bibendum duis mauris dictum molestie enim ut. Elementum tempus adipiscing praesent adipiscing nulla vitae nibh fermentum." },
    { src: Banner3, title: "Smart Solutions for a Connected World", description: "Lorem ipsum dolor sit amet consectetur. Leo eget suspendisse sollicitudin consectetur. Aliquet in id id ullamcorper pulvinar dolor amet. Augue pretium amet platea eu sit sit. In maecenas mi a urna posuere. Augue felis urna et in non sit augue. Tristique etiam quis bibendum duis mauris dictum molestie enim ut. Elementum tempus adipiscing praesent adipiscing nulla vitae nibh fermentum." }
  ];

  // Auto-slide logic using useEffect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <UpperHeader />
      <Header />
      <div className="relative h-[700px] overflow-hidden">
        <Image
          src={images[currentImage].src}
          alt={`Banner ${currentImage + 1}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform bg-cover w-full h-full duration-700"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-4xl font-bold">{images[currentImage].title}</h1>
          <p className="mt-4 text-center max-w-2xl">{images[currentImage].description}</p>
          <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full">
            Start Now
          </button>
        </div>
        {/* Dot indicators */}
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
      <Services />
      <Soluations />
      <Techonologies/>
     
    </>
  );
};

export default Home;
