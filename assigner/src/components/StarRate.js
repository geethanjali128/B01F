import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const StarRate = () => {
  const [selectedStars, setSelectedStars] = useState(Array(5).fill(false));

  const handleStars = (i) => {
    setSelectedStars((prevStars) => {
      const newStars = [...prevStars];
      newStars[i] = !newStars[i];
      return newStars;
    });
  };

  return (
    <div className="flex">
      {selectedStars.map((isActive, index) => (
        <FontAwesomeIcon
          icon={faStar}
          onClick={() => handleStars(index)}
          className={` md:mx-1 pb-1 cursor-pointer md:w-6 md:h-8 transform transition-transform duration-300  ease-in-out hover:scale-125  ${
            isActive ? "text-customPurple2" : "text-gray-300 "
          }`}
        />
      ))}
    </div>
  );
};

export default StarRate;
