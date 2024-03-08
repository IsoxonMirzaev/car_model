import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-around h-32 items-center">
      <div>
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
      <div>
      <ul className="text-[#666872] flex gap-10">
          <li className="text-lg">Menu 1</li>
          <li className="text-lg">Menu 1</li>
          <li className="text-lg">Menu 1</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
