import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavLinks = ({ isMobile }) => {
  return (
    <ul
      className={`${
        isMobile
          ? "flex flex-col items-center gap-4 py-4 bg-customGrey w-full"
          : "shadow-customLight flex items-center font-medium gap-[63px] py-[14px] px-[35px] bg-customGrey text-16 leading-19.38"
      }`}
    >
      <Link to="/">
        <li className="font-bold cursor-pointer">Home</li>
      </Link>
      <li className="cursor-pointer">About Us</li>
      <li className="cursor-pointer">Our Services</li>
      <li className="cursor-pointer">IELTS & PTE</li>
      <li className="cursor-pointer">Contact Us</li>
    </ul>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 ">
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </button>
      </div>
      <div className="hidden md:flex md:justify-center justify-end md:gap-14">
        <NavLinks />
      </div>
      {isOpen && (
        <div className="md:hidden absolute top-28 left-0 right-0 z-50 shadow-lg">
          <NavLinks isMobile={true} />
        </div>
      )}
    </nav>
  );
};

export default Nav;
