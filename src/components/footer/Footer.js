import React from "react";
import { FaLinkedinIn, FaAngleRight } from "react-icons/fa6";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <div className="flex flex-wrap justify-between mx-20 my-10">
        <div>
          <h1 className="text-[#100E34] font-bold text-lg font-sans">
            Subscribe To The Newsletter
          </h1>
          <div className="flex items-center xl:w-[400px] h-16 bg-[#FFFFFE] border-2 border-[#EAEBF0] rounded-full mt-10">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="xl:w-80 h-6 ml-5 border-none outline-none"
            />
            <button className="w-11 h-11 bg-[#A2001D] rounded-full text-center text-white text-2xl pl-2.5">
              <FaAngleRight />
            </button>
          </div>
          <div className="flex gap-5 mt-10">
            <button className="w-8 h-8 bg-[#55ACEE] rounded-full text-white p-2">
              <FaTwitter />
            </button>
            <button className="w-8 h-8 bg-[#3B5998] rounded-full text-white p-2">
              <FaFacebookF />
            </button>
            <button className="w-8 h-8 bg-[#0976B4] rounded-full text-white p-2">
              <FaLinkedinIn />
            </button>
          </div>
        </div>
        <div className="flex flex-wrap gap-16 mt-5 xl:mt-0">
          <div>
            <h1 className="text-[#100E34] text-base font-bold">
              Buying & Selling
            </h1>
            <ul>
              <li className="text-[#666872] text-sm mt-5">Fid A Car</li>
              <li className="text-[#666872] text-sm mt-3">Listings By City</li>
              <li className="text-[#666872] text-sm mt-3">Sell Your Car</li>
              <li className="text-[#666872] text-sm mt-3">
                Compare Side By Side
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#100E34] text-base font-bold">Resource</h1>
            <ul>
              <li className="text-[#666872] text-sm mt-3">Blog</li>
              <li className="text-[#666872] text-sm mt-3">Guides</li>
              <li className="text-[#666872] text-sm mt-3">FAQ</li>
              <li className="text-[#666872] text-sm mt-3">Help Center</li>
            </ul>
          </div>
          <div>
            <h1 className="text-[#100E34] text-base font-bold">About</h1>
            <ul>
              <li className="text-[#666872] text-sm mt-3">Company</li>
              <li className="text-[#666872] text-sm mt-3">Career</li>
              <li className="text-[#666872] text-sm mt-3">Contact</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-36 h-16 items-center pl-20 ">
        <h1 className="text-sm text-[#666872]">&copy; 2023 Car Leadership</h1>
        <ul className="flex flex-wrap gap-10">
          <li className="text-sm text-[#666872]">Terms Of Service</li>
          <li className="text-sm text-[#666872]">Privacy Policy</li>
          <li className="text-sm text-[#666872]">Trust & Safety</li>
          <li className="text-sm text-[#666872]">Law Enforcement</li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
