import React from "react";
import star from "../assets/star.png";

const StarRate = () => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }).map((_, index) => (
        <img key={index} src={star} alt="star" />
      ))}
    </div>
  );
};

export default StarRate;
