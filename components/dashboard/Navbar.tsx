import React from "react";

const Navbar = ({ pageTitle }: any) => {
  return (
    <nav className="w-full flex items-end justify-end md:px-24 px-5 py-2 bg-[#F9F9FA]" >
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center">
              <h1 className="text-xs font-semibold">P</h1>
          </div>
          <h6 className="font-semibold text-xs">Pelumi Isola</h6>
        </div>
    </nav>
  );
};

export default Navbar;
