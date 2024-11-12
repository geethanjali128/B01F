import React from "react";
import LOGO from "../assets/logo.png";
import Nav from "./Nav";

const Header = () => {
  return (
    <div className="flex items-center  ">
      <img className="w-249 h-96 mx-5" src={LOGO} alt="logo" />
      <div></div>
      <Nav />
      <button className="w-139.6 h-40.24  ml-16  rounded-[4.72px] bg-customPurple1 text-customWhite font-semibold text-15 leading-18.17">
        Login
      </button>
    </div>
  );
};

export default Header;
