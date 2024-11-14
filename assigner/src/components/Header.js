import React from "react";
import LOGO from "../assets/logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className=" w-full h-121 flex items-center md:gap-0 gap-20 ">
      <img
        className="md:w-249 object-cover md:h-96 h-14  mx-5"
        src={LOGO}
        alt="logo"
      />
      <div className="flex items-center md:flex-row flex-row-reverse">
        <Nav />
        <button className="md:w-139.6 w-max px-2  md:h-40.24 py-1  ml-16  rounded-[4.72px] bg-customPurple1 text-customWhite font-semibold text-15 leading-18.17 hover:text-customPurple2 hover:bg-transparent hover:border-2 border-customPurple2">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
