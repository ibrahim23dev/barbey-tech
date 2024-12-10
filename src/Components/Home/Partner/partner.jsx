import React from "react";
import Image from "next/image";
import Microsoft from '@/Assets/Tech/microsoft.png'
import ucb from '@/Assets/Tech/Ucb.png'
import Oracel from '@/Assets/Tech/oracle_logo.webp'
import Cisco from '@/Assets/Tech/ciscologo.png'
import talitok from '@/Assets/Tech/talitoklogo.png'
import Dbbl from '@/Assets/Tech/Dbbl.png'
function PartnerSection() {
  const partners = [
    { name: "Microsoft Gold Partner", logo: Microsoft },
    { name: "SAP Gold Partner", logo: ucb },
    { name: "Dell", logo: Oracel },
    { name: "Oracle", logo: Cisco },
    { name: "VMware", logo: talitok },
    { name: "Fortinet", logo: Dbbl },
    
  ];

  return (
    <section className="Partnerbg bg-red-50 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Client Partners of <span className="text-purple-600">Our Company</span>
        </h2>
        <p className="text-gray-600 mt-4">
          Collaborating with industry leaders to deliver the best solutions.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Image
                src={partner.logo}
                width={220}
                height={100}
                alt={partner.name}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnerSection;
