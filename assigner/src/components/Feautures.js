import anime from "animejs";
import React, { useRef } from "react";

const Feautures = ({ data }) => {
  const cardRefs = useRef([]);

  const handleMouseOver = (index) => {
    anime({
      targets: cardRefs.current[index],
      rotate: "1turn",
      duration: 2000,
      easing: "easeInOutSine",
      complete: () => {
        anime({
          targets: cardRefs.current[index],
          rotate: 0,
          duration: 0,
        });
      },
    });
  };
  return (
    <div className=" md:h-221 md:my-3 h-[600px] sm:h-[300px] mt-7 mb-1">
      <h3 className="text-center md:text-3xl text-xl font-bold ">
        Awesome Features
      </h3>
      <p className="text-center md:text-2xl text-md font-medium ">
        Get ready to unlock the next level of features
      </p>
      <div className=" grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 mx-24 sm:mx-20 md:mx-10   mt-3  ">
        {data.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => (cardRefs.current[index] = el)}
            onMouseOver={() => handleMouseOver(index)}
            className="cursor-pointer  sm:mb-2 md:w-270 w-60 border border-customBlack rounded-lg shadow-customShadow mb-2 text-center py-1 px-2"
          >
            <img
              src={item.img}
              alt="icon"
              width={"50px"}
              height={"50px"}
              className="mx-auto mt-2"
            />

            <h4 className="text-customBlack1 text-lg pt-3">{item.title}</h4>
            <p className="font-light md:text-base text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feautures;
