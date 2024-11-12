import React, { useState } from "react";
import Arrow from "../assets/arrow.png";

const FAQS = ({ data }) => {
  const [isIndex, setIsIndex] = useState(null);

  const handleAccordian = (i) => {
    setIsIndex(isIndex === i ? null : i);
  };
  return (
    <div className="mt-16">
      <h3 className="text-center font-bold mb-5">FAQS</h3>
      <div className="md:w-8/12 md:mx-auto m-3 h-300">
        {data.map((dataItem, index) => (
          <div key={dataItem.id}>
            <div
              className="w-full flex justify-between bg-customWhite1 shadow-customShadow1 mb-2 px-2 py-1 cursor-pointer "
              onClick={() => handleAccordian(index)}
            >
              <div>
                <h4 className="text-lg font-medium">{dataItem.question}</h4>
                <div>
                  {isIndex === index && (
                    <p className="text-sm my-1  ">{dataItem.answer}</p>
                  )}
                </div>
              </div>
              <div
                className={`py-2 transform transition-transform duration-300 ${
                  isIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <img src={Arrow} alt="arrow" className="w-3" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
