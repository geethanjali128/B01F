import React from "react";
import Objects1 from "../assets/OBJECTS1.png";
import Objects2 from "../assets/OBJECTS2.png";

const Advantages = ({ data }) => {
  return (
    <div className=" relative text-center mt-10  mb-5">
      <div>
        <img
          src={Objects1}
          alt="objects1"
          className="md:visible hidden absolute w-16 h-40 object-cover bottom-28 md:right-24 right-20"
        />
        <img
          src={Objects2}
          alt="objects2"
          className="md:visible hidden absolute w-32 object-cover md:left-12 left-10 -bottom-20"
        />
      </div>
      <h3 className="md:text-3xl text-xl font-bold mb-2">
        Our Assistance's advantages
      </h3>
      <p className="md:text-xl text-md  font-medium mb-3">
        The Assigner wants to build a strong foundation that will enable
        students to soar to achievement.
      </p>
      <div className="grid md:grid-cols-4  sm:grid-cols-2 grid-cols-1 md:w-9/12 md:mx-auto mx-48 w-8/12  ">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-black w-56  p-3 rounded-2xl bg-customWheat -mx-5 mb-2"
          >
            <h4 className="md:text-2xl md:pt-5 pb-2 mt-2 text-lg">
              {item.title}
            </h4>
            <p className="md:text-md text-sm ">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;
