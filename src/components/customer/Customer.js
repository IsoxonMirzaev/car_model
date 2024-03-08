import React from "react";
import { customer_data } from "../../static_data";

function Customer() {
  return (
    <div>
      <h1 className="flex my-12 items-center justify-center gap-3 text-2xl text-[#100E34] font-normal pt-10">
        <hr className="text-[#D3D5E0] w-36" />
        Our Customer Feedback
        <hr className="text-[#D3D5E0] w-36" />
      </h1>
      <div className="flex flex-wrap justify-center gap-10">
        {customer_data.map(data => {
          return (
            <div className="w-[400px] h-64 bg-white rounded-xl pt-6 pl-9">
              <div className="flex items-center gap-4">
                <img src={data.avatar} alt="" />
                <h1 className="flex-col flex text-lg text-[#100E34] font-bold">{data.name} <span className="text-sm font-normal">{data.description}</span></h1>
              </div>
              <p className="text-[#666872] text-sm w-80 mt-5">{data.p}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}

export default Customer;
