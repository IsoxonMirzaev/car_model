import React from "react";

function Blogs() {
  return (
    <div className="bg-[#EAEBF0]">
      <h1 className="flex my-12 items-center justify-center gap-3 text-2xl text-[#100E34] font-normal pt-10">
        <hr className="text-[#D3D5E0] w-36" />
        Blogs
        <hr className="text-[#D3D5E0] w-36" />
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="w-[400px] h-96 car pt-56">
          <div className="text-[#100E34] text-lg w-full h-20 bg-white rounded-2xl flex justify-center items-center pl-3">
            <h1 className="">
              Is the 2024 Porsche Cayenne S a Good SUV? 4 Pros and 3 Cons
            </h1>
          </div>
        </div>
        <div className="w-[400px] h-96 car2 pt-56">
          <div className="text-[#100E34] text-lg w-full h-20 bg-white rounded-2xl flex justify-center items-center pl-3">
            <h1>Compact Steamroller: 2024 Toyota RAV4 Starts at $29,825</h1>
          </div>
        </div>
        <div className="w-[400px] h-96 car3 pt-56">
          <div className="text-[#100E34] text-lg w-full h-20 bg-white rounded-2xl flex justify-center items-center pl-3">
            <h1>2024 Kia Niro EV Costs $50 More, Nearly Unchanged Otherwise</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
