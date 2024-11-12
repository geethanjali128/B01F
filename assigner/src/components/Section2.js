import React from "react";
import layer from "../assets/layer.png";
import vector from "../assets/vector.png";
import women from "../assets/women.png";

const Section2 = () => {
  return (
    <div className=" relative  w-full md:h-503 h-[300px] flex bg-custom-gradient px-2 rounded-lg pb-5 pt-10">
      {/* sub section1 */}
      <div className=" w-full md:ml-20 ml-5">
        <h4 className="md:text-6xl text-md">
          <span className="text-customPurple3 py-5">IELTS Preparation</span>{" "}
          <br />
          <span className="text-customPurple2 pb-5">Online Best Learning</span>
          <br />
          <span className="text-customLightPurple pb-5">
            opportunities in The World
          </span>
        </h4>
        <p className="md:text-xl mt-5 w-max text-xs ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          <br /> Audax negotium, dicerem impudens, nisi hoc institut
          <br /> translatum ad philosophos nostros esset.
        </p>
        <button className="md:text-3xl text-customWhite bg-customPurple2 rounded-md px-10 py-2 mt-7 ml-3">
          Enroll Now
        </button>
      </div>
      {/* subsection2  */}
      <div>
        <div className="md:-ml-80 md:-mt-5 -ml-40 -mt-5 ">
          <img src={layer} alt="layer" className="md:w-[900px] w-[700px]" />
        </div>
        <div className=" md:-ml-3 md:-mt-16 -ml-5 -mt-6 ">
          <img src={women} alt="women" className="md:w-80 w-40" />
        </div>
        <div className="absolute md:bottom-1 md:right-28 -z-10 bottom-2">
          <img src={vector} alt="vector" className="w-[340px]" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
