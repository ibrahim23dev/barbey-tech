import upay from "@/public/images/upay.png";
import dbbl from "@/public/images/dbbl.png";
import nagad from "@/public/images/nagad.png";
import visa1 from "@/public/images/visa1.png";
import logo from "@/public/images/logo-white.png";

import visa from "@/public/images/visa.png";
import islamiBank from "@/public/images/islami-bank.png";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[var(--footer-bg)] text-white py-8 px-2 md:px-20 lg:px-48 ">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Discover Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto">
          <div className="flex flex-col space-y-4 my-5 md:my-0 md:text-left">
            <h5 className="font-bold text-lg mb-2">Discover</h5>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 list-disc list-inside">
              <li>
                <a href="#" className="hover:underline text-[13px]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[13px]">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[13px]">
                  Talent & Culture
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[13px]">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[13px]">
                  EMI Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline text-[13px]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center space-y-4  my-5 md:my-0">
            <h5 className="font-semibold text-lg">Payment Methods</h5>
            <div className="grid grid-cols-3 gap-4">
              <Image src={upay} alt="Upay" className="h-12" />
              <Image src={nagad} alt="Nagad" className="h-12" />
              <Image src={dbbl} alt="DBBL" className="h-12" />
              <Image src={visa1} alt="Visa" className="h-12" />
              <Image src={visa} alt="Mastercard" className="h-12" />
              <Image src={islamiBank} alt="Islami Bank" className="h-12" />
            </div>
          </div>
        </div>

        {/* Need Help Section */}
        <div className="grid grid-cols-1 md:grid-cols-2  my-5 md:my-0">
          <div className="text-center md:text-left">
            <h5 className="font-bold text-[16px]  my-2">Need Help?</h5>
            <p className="text-[11px]">
              We’re here for you 24/7! Reach out to us through Messenger or call
              any time of day or night, for the support you need.
            </p>
            <div className="mt-4">
              <h5 className="font-bold text-[16px] my-2">Experience Center</h5>
              <p className="text-[11px] underline">Sheikh Abas</p>
              <p className="text-[11px] underline">
                House #5, Road # 11, Block C, Level 2, Banani, Dhaka
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="flex flex-col items-center space-y-2  my-10 md:my-0">
            <h5 className="font-bold text-[16px]">Contact</h5>
            <a
              href="mailto:contact@adbiyastour.com"
              className="hover:underline"
            >
              contact@adbiyastour.com
            </a>
            <p>+1 (345) 689-0734</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-300">
                FB
              </a>
              <a href="#" className="hover:text-gray-300">
                IG
              </a>
              <a href="#" className="hover:text-gray-300">
                YT
              </a>
              <a href="#" className="hover:text-gray-300">
                TW
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white mt-5 md:mt-20 pt-4 text-center  flex items-center justify-around flex-wrap">
        <Image width={150} src={logo}></Image>
        <p>© Copyright Adbiyastour & Travel.</p>
      </div>
    </footer>
  );
}