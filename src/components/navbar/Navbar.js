import React, { useState } from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-around h-32 items-center">
        <div className="hidden md:block">
          <ul className="text-[#666872] flex gap-10">
            <li className="text-lg">Moblile</li>
            <li className="text-lg">Menu 1</li>
            <li className="text-lg">Menu 1</li>
          </ul>
        </div>
        <div>
          <h1 className="text-[#100E34] text-3xl font-bold font-sans">
            CAR <span className="text-lg text-[#A2001D]">DEALERSHIP</span>
          </h1>
        </div>
        <div className="hidden md:block">
          <ul className="text-[#666872] flex gap-10">
            <li className="text-lg">Menu 1</li>
            <li className="text-lg">Menu 1</li>
            <li className="text-lg">Menu 1</li>
          </ul>
        </div>
        <div className=" md:hidden">
          {open ? (
            <IoMdClose className="w-10 h-10" onClick={() => setOpen(!open)} />
          ) : (
            <IoMdMenu className="w-10 h-10" onClick={() => setOpen(!open)} />
          )}
        </div>
      </nav>
      {open ? (
        <div className="w-full h-screen text-center pr-36 fixed bg-white inset-x-0 bottom-0">
          <ul className="text-[#666872]">
            <li className="text-lg mt-10">Moblile</li>
            <li className="text-lg mt-10">Menu 1</li>
            <li className="text-lg mt-10">Menu 1</li>
            <li className="text-lg mt-10">Menu 1</li>
            <li className="text-lg mt-10">Menu 1</li>
            <li className="text-lg mt-10">Menu 1</li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Navbar;
