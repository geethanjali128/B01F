import React from "react";
import HeroImg from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative">
      <div className="md:hidden absolute left-6 top-6">
        <h3 className="text-base leading-6">
          <span className="text-customPurple4">Navigate Your</span>
          <br /> <span className="text-customPurple2">Academic Journey</span>
          <br />
          <span className="text-customPink">with Confidence</span>
        </h3>
        <p className="text-xs font-medium w-64 leading-5 mt-4">
          Providing high-quality and comprehensive assistance with assignments
          and thesis writing for students at all academic levels.
        </p>
      </div>
      <img
        className="md:w-[1440px] w-858 h-503 border-[0.82px] border-solid border-customGray "
        src={HeroImg}
        alt="poster"
      />
    </div>
  );
};

export default Hero;
