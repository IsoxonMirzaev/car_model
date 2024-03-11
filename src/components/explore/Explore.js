import React from "react";
import { explore_data } from "../../static_data";
import { FaAngleRight } from "react-icons/fa6";

function Explore() {
  return (
    <div className="bg-[#EAEBF0] pb-20">
      <h1 className="flex flex-wrap my-16 items-center justify-center gap-3 text-2xl text-[#100E34] font-normal pt-10">
        <hr className="text-[#D3D5E0] w-36 hidden lg:block" />
        Explore
        <hr className="text-[#D3D5E0] w-36 hidden lg:block" />
      </h1>
      <div className="flex flex-wrap gap-14 justify-center">
        <h1 className="text-lg text-[#666872] hover:bg-[#A2001D] hover:w-40 hover:h-12 hover:text-white hover:rounded-full hover:text-center hover:pt-2 duration-200">
          Cars & Minivan
        </h1>
        <h1 className="text-lg text-[#666872] hover:bg-[#A2001D] hover:w-40 hover:h-12 hover:text-white hover:rounded-full hover:text-center hover:pt-2 duration-200">
          Trucks
        </h1>
        <h1 className="text-lg text-[#666872] hover:bg-[#A2001D] hover:w-40 hover:h-12 hover:text-white hover:rounded-full hover:text-center hover:pt-2 duration-200">
          Crossovers & SUVs
        </h1>
        <h1 className="text-lg text-[#666872] hover:bg-[#A2001D] hover:w-40 hover:h-12 hover:text-white hover:rounded-full hover:text-center hover:pt-2 duration-200">
          Electrified
        </h1>
      </div>
      <div className="mt-10 flex flex-wrap justify-center xl:justify-around w-full lg:pl-72">
        {explore_data.map((data) => {
          return (
            <div className="w-full mt-5" key={data.id}>
              <div className="w-80 h-96 bg-white ml-20 relative rounded-3xl">
                <div className="pt-5">
                  <h2 className="text-2xl text-[#100E34] ml-5">{data.name}</h2>
                  <p className="text-[#666872] text-sm mt-2 ml-5">
                    {data.type}
                  </p>
                </div>
                <div>
                  <img
                    className="absolute xl:block hidden right-72 mt-10"
                    src={data.image}
                    alt=""
                  />
                  <div className="ml-12 pt-12">
                    <h3 className="flex justify-between text-[#666872] text-sm">
                      {data.year}{" "}
                      <span className="mr-6 text-[#100E34] text-lg">
                        {data.m_year}
                      </span>
                    </h3>
                    <h3 className="flex justify-between mt-3 text-[#666872] text-sm">
                      {data.model}{" "}
                      <span className="mr-6 text-[#100E34] text-lg">
                        {data.type_model}
                      </span>
                    </h3>
                    <h3 className="flex justify-between mt-3 text-[#666872] text-sm">
                      {data.fuel}{" "}
                      <span className="mr-6 text-[#100E34] text-lg">
                        {data.type_fuel}
                      </span>
                    </h3>
                    <h1 className="text-[#100E34] text-2xl mt-10">
                      {data.price}
                    </h1>
                    <button className="w-52 h-11 bg-[#100E34] text-white flex rounded-full text-base font-semibold justify-between px-5 items-center">
                      {data.button} <FaAngleRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Explore;
