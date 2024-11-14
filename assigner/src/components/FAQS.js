import React, { useState } from "react";
import Arrow from "../assets/arrow.png";

const FAQS = ({ data }) => {
  const [isIndex, setIsIndex] = useState(null);

  const handleAccordian = (i) => {
    setIsIndex(isIndex === i ? null : i);
  };
  return (
    <div className="md:mt-16 mt-8 md:mb-0 mb-16">
      <h3 className="text-center font-bold mb-5">FAQS</h3>
      <div className="md:w-8/12 md:mx-auto m-3 md:h-300 h-350 flex flex-col gap-3">
        {data.map((dataItem, index) => (
          <div key={dataItem.id}>
            <div
              className="w-full flex justify-between items-center bg-customWhite1 shadow-customShadow1 mt-0 mb-5 px-2 py-1 cursor-pointer border-bottom-2  "
              onClick={() => handleAccordian(index)}
            >
              <h4 className="text-lg font-medium">{dataItem.question}</h4>

              <div
                className={`py-2 transform transition-transform duration-300 ${
                  isIndex === index ? "rotate-180" : "rotate-0"
                }`}
              >
                <img src={Arrow} alt="arrow" className="w-3" />
              </div>
            </div>
            <div className="bg-customWhite1 shadow-none -mt-5">
              {isIndex === index && (
                <p className="text-sm px-2 pb-2 border-l-4 border-customPurple">
                  {dataItem.answer}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQS;
