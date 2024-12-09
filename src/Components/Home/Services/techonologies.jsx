import React from "react";
import Web from "@/Assets/Tech/web.png"
import Mobile from "@/Assets/Tech/mobile.png"
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-gradient-to-b from-purple-50 to-indigo-100 min-h-screen font-sans">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800">
          Agile Software Development
        </h1>
        <p className="text-lg text-gray-600 mt-2">
          Our processes are proven, the capabilities are there, and our tools
          are top-notch.
        </p>
      </div>

      

      
      {/* Web and Mobile Tech Stack */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 mb-16 px-4">
        {/* Web Tech Stack */}
        <div className=" p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Web</h2>
          <Image
            src={Web}
            alt="Web illustration"
            className="mb-4 rounded"
          />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Tech Stack
          </h3>
          <ul className="text-gray-600 space-y-1">
            <li>Backend: Laravel, Node.js</li>
            <li>CMS: WordPress, Shopify</li>
            <li>Frontend: React.js, Angular, Vue.js</li>
            <li>Database: MySQL, PostgreSQL, MongoDB</li>
          </ul>
        </div>

        {/* Mobile Tech Stack */}
        <div className="  p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mobile</h2>
          <Image
            src={Mobile}
            alt="Mobile illustration"
            className="mb-4 rounded"
          />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Tech Stack
          </h3>
          <ul className="text-gray-600 space-y-1">
            <li>Android, iOS</li>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>

      {/* Testing Section */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testing</h2>
        <div className="flex justify-center items-center gap-4">
          <div className="bg-indigo-200 rounded-lg p-4 w-32 h-32 flex justify-center items-center">
            <span className="text-indigo-700 font-semibold">Unit Tests</span>
          </div>
          <div className="bg-indigo-200 rounded-lg p-4 w-32 h-32 flex justify-center items-center">
            <span className="text-indigo-700 font-semibold">Integration</span>
          </div>
          <div className="bg-indigo-200 rounded-lg p-4 w-32 h-32 flex justify-center items-center">
            <span className="text-indigo-700 font-semibold">End-to-End</span>
          </div>
        </div>
      </div>

      {/* DevOps Section */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">DevOps</h2>
        <div className="flex justify-center items-center gap-8">
          <img
            src="https://via.placeholder.com/64"
            alt="GitHub"
            className="rounded-full"
          />
          <img
            src="https://via.placeholder.com/64"
            alt="GitLab"
            className="rounded-full"
          />
          <img
            src="https://via.placeholder.com/64"
            alt="Bitbucket"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Deployment Section */}
      <div className="container mx-auto text-center mb-16">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Deployment
        </h2>
        <div className="flex justify-center items-center gap-8">
          <img
            src="https://via.placeholder.com/64"
            alt="AWS"
            className="rounded-full"
          />
          <img
            src="https://via.placeholder.com/64"
            alt="DigitalOcean"
            className="rounded-full"
          />
          <img
            src="https://via.placeholder.com/64"
            alt="Cloud Services"
            className="rounded-full"
          />
        </div>
      </div>

      {/* Solutions */}
      <div className="container mx-auto grid lg:grid-cols-2 gap-8 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Web Solutions
          </h2>
          <ul className="text-gray-600 space-y-1">
            <li>eCommerce</li>
            <li>Web Development</li>
            <li>API Integration</li>
            <li>Real-time Apps</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Mobile Solutions
          </h2>
          <ul className="text-gray-600 space-y-1">
            <li>Booking Apps</li>
            <li>Utility Apps</li>
            <li>Financial Apps</li>
            <li>eCommerce Apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
