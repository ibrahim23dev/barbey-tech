import React from "react";
import Web from "@/Assets/Tech/web1.png";
import Mobile from "@/Assets/Tech/mobile2.png";
import Github from "@/Assets/Tech/github.png";
import Bitbucket from "@/Assets/Tech/bitbucket.png";
import Gitlab from "@/Assets/Tech/gitlab.png";
import Testing from "@/Assets/Tech/testing.png";
import Aws from "@/Assets/Tech/aws.png";
import Cloud from "@/Assets/Tech/cloud.png";
import Othercloud from "@/Assets/Tech/other-cloud.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg min-h-screen font-sans">
      {/* Header Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
          Agile Software Development
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mt-2">
          Our processes are proven, the capabilities are there, and our tools are top-notch.
        </p>
      </div>

      {/* Web and Mobile Tech Stack */}
      <div className="container mx-auto grid sm:grid-cols-2 gap-8 mb-16 px-4">
        {/* Web Tech Stack */}
        <div className="p-4 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Web</h2>
          <Image
            src={Web}
            alt="Web illustration"
            className="mb-4 rounded"
            width={500}
            height={300}
            layout="responsive"
          />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Tech Stack</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Backend: Laravel, Node.js</li>
            <li>CMS: WordPress, Shopify</li>
            <li>Frontend: React.js, Angular, Vue.js</li>
            <li>Database: MySQL, PostgreSQL, MongoDB</li>
          </ul>
        </div>

        {/* Mobile Tech Stack */}
        <div className="p-4 sm:p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mobile</h2>
          <Image
            src={Mobile}
            alt="Mobile illustration"
            className="mb-4 rounded"
            width={500}
            height={300}
            layout="responsive"
          />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">Tech Stack</h3>
          <ul className="text-gray-600 space-y-1">
            <li>Android, iOS</li>
            <li>React Native</li>
            <li>Flutter</li>
          </ul>
        </div>
      </div>

      {/* Testing Section */}
      <div className="container mx-auto text-center px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Testing</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
          <Image
            alt="Testing"
            src={Testing}
            className="rounded"
            width={800}
            height={400}
            layout="responsive"
          />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <div className="bg-indigo-200 rounded-lg p-4 w-24 h-24 flex justify-center items-center">
            <span className="text-indigo-700 font-semibold text-sm">Unit Tests</span>
          </div>
          <div className="bg-indigo-200 rounded-lg p-4 w-24 h-24 flex justify-center items-center">
            <span className="text-indigo-700 font-semibold text-sm">Integration</span>
          </div>
          <div className="bg-indigo-200 rounded-lg p-4 w-24 h-24 flex justify-center items-center">
            <span className="text-indigo-700 font-semibold text-sm">End-to-End</span>
          </div>
        </div>
      </div>

      {/* DevOps Section */}
      <div className="container mx-auto text-center mb-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">DevOps</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src={Github} width={100} height={100} alt="GitHub" className="rounded-full" />
          <Image src={Gitlab} width={100} height={100} alt="GitLab" className="rounded-full" />
          <Image src={Bitbucket} width={100} height={100} alt="Bitbucket" className="rounded-full" />
        </div>
      </div>

      {/* Deployment Section */}
      <div className="container mx-auto text-center mb-16 px-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Deployment</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          <Image src={Aws} width={100} height={100} alt="AWS" className="rounded-full" />
          <Image src={Cloud} width={100} height={100} alt="DigitalOcean" className="rounded-full" />
          <Image src={Othercloud} width={100} height={100} alt="Cloud Services" className="rounded-full" />
        </div>
      </div>

      {/* Solutions Section */}
      <div className="container mx-auto grid sm:grid-cols-2 gap-8 px-4">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Web Solutions</h2>
          <ul className="text-gray-600 space-y-1">
            <li>eCommerce</li>
            <li>Web Development</li>
            <li>API Integration</li>
            <li>Real-time Apps</li>
          </ul>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Mobile Solutions</h2>
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
