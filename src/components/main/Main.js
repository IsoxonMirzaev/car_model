import React from "react";
import { FiChevronDown } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";
import { main_data } from "../../static_data";
import { FaAngleRight } from "react-icons/fa6";
import Car_img from "../../img/Car-PNG-Photos 1.png";

function Main() {
  return (
    <div>
      <div className="w-full flex-wrap flex items-center justify-center bg mt-10 p-20 bg-origin-content">
        <div>
          <h1 className="text-5xl font-bold text-[#100E34]">Find Your Dream</h1>
          <h1 className="text-[#A2001D] text-7xl font-bold mt-5 flex items-center gap-10">
            CAR{" "}
            <button className="bg-[#100E34] text-white w-36 h-11 text-sm flex items-center justify-center rounded-full gap-3">
              Order Now <FaAngleRight />
            </button>
          </h1>
        </div>
        <div>
          <img src={Car_img} alt="" />
        </div>
      </div>
      <div className="flex flex-wrap gap-4 shadow-2xl sm:w-80 md:w-96 lg:w-[600px] xl:w-[746px] h-24 items-center justify-center rounded-full mx-auto">
        <div className="flex">
          <div className="w-52">
            <h4 className="text-[#AFB1BA] flex items-center text-sm">
              New/Used <FiChevronDown className="text-lg" />
            </h4>
            <h3 className="text-[#100E34] mt-2">New & Used</h3>
          </div>
          <div className="w-52">
            <h4 className="text-[#AFB1BA] flex items-center text-sm">
              Make <FiChevronDown className="text-lg" />
            </h4>
            <h3 className="text-[#100E34] mt-2">INFINITI</h3>
          </div>
          <div className="w-52">
            <h4 className="text-[#AFB1BA] flex items-center text-sm">
              Model <FiChevronDown className="text-lg" />
            </h4>
            <h3 className="text-[#100E34] mt-2">All Models</h3>
          </div>
        </div>
        <button className="w-10 h-10 rounded-full bg-[#A2001D] text-white flex justify-center items-center">
          <CiSearch className="w-6 h-6" />
        </button>
      </div>
      <div>
        <h1 className="flex my-16 items-center justify-center gap-3 text-2xl text-[#100E34] font-normal">
          <hr className="text-[#D3D5E0] w-36" />
          Brands
          <hr className="text-[#D3D5E0] w-36" />
        </h1>
        <div className="flex flex-wrap gap-10 justify-center">
          {main_data.map((data) => {
            return (
              <div
                className="text-center w-32 flex flex-col items-center"
                key={data.id}
              >
                <img
                  className="w-20 h-16 object-contain"
                  src={data.logo}
                  alt=""
                />
                <img
                  className="w-28 mt-3 h-6 object-contain"
                  src={data.word}
                  alt=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Main;
