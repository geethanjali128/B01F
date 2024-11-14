import React from "react";
import StarRate from "./StarRate";

const Services = ({ data }) => {
  console.log(data);
  return (
    <div className="md:mx-10  mt-20  bg-customVoilet rounded-md ">
      <h3 className="text-center py-3 md:text-4xl text-xl text-md">
        Our Services
      </h3>
      <p className="text-center md:text-2xl">
        We offer some fantastic services
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-3  grid-cols-2 md:ml-10 ml-8 mt-5 ">
        {data.map((item) => (
          <div
            key={item.id}
            className="border border-customBlack md:w-64 w-40  md:h-64 md:mb-10 mb-5 md:rounded-2xl rounded-md shadow-customLight"
          >
            <img
              src={item.img}
              alt="service-icon"
              className="w-64 h-40 rounded-t-2xl transform transition-transform duration-300 ease-in-out hover:scale-105  cursor-pointer"
            />
            <h4 className="ml-2 md:text-2xl my-2">{item.title}</h4>
            <div className="flex items-center ml-2">
              <div>
                <StarRate />
              </div>

              <span className="ml-1">({item.rating})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
