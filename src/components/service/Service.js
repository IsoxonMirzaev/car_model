import React from "react";
import { service_data } from "../../static_data";
import car from "../../img/big_car.png";
import { FaAngleRight } from "react-icons/fa6";

function Service() {
  return (
    <div>
      <div>
        <h1 className="flex my-12 items-center justify-center gap-3 text-2xl text-[#100E34] font-normal pt-10">
          <hr className="text-[#D3D5E0] w-36" />
          Our Services
          <hr className="text-[#D3D5E0] w-36" />
        </h1>
        <p className="text-[#666872] text-lg text-center">
          We Provide Many Of The Best Servises For You And You Will Get The Best
          Benefits Here
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-10 mt-20">
        {service_data.map((data) => {
          return (
            <div className="w-80 h-60 bg-white rounded-xl shadow-2xl pl-7 pt-5">
              <div>
                <img className="pb-5" src={data.logo} alt="" />
              </div>
              <h2 className="text-lg text-[#100E34] font-bold">{data.text}</h2>
              <p className="text-[#666872] text-lg mt-3 w-64">{data.p}</p>
            </div>
          );
        })}
      </div>
      <div className="xl:flex items-center mt-32">
        <div>
          <img className="relative z-10" src={car} alt="" />
        </div>
        <div className="w-[670px] h-[467px] bg-white rounded-l-xl xl:absolute right-0 pl-16 pt-20">
          <h1 className="text-3xl text-[#100E34] font-bold">
            EVs For Everyone
          </h1>
          <p className="text-lg text-[#666872] w-96 mt-16">
            We Provide Many Of The Best Servises For You And You Will Get The
            Best Benefits Here
          </p>
          <button className="w-40 h-11 bg-[#100E34] text-white flex rounded-full text-sm font-semibold justify-between items-center px-5 mt-20">
            Read More <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Service;
