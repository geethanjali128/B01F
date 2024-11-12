import {
  faFile,
  faUniversity,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import object1 from "../assets/object1.png";
import object2 from "../assets/object2.png";

import React from "react";

const Section1 = () => {
  return (
    <div className=" relative flex my-3">
      <div className="absolute left-1 top-1 w-32 ml-3 md:visible hidden ">
        <img src={object1} alt="object1" />
      </div>

      <div className=" md:w-11/12 w-full  shadow-lg text-center m-auto my-5  px-5 py-3">
        <h2 className="md:text-4xl text-2xl font-bold">
          700+ students saved, and counting
        </h2>
        <p className="md:text-xl text-md font-medium py-3">
          50K new study notes added every day, from the world’s most active
          student communities
        </p>
        <ul className="flex justify-center md:gap-48 gap-20 py-2">
          <div>
            <li className="md:text-3xl font-bold py-1 font-serif">350+</li>
            <li>
              <FontAwesomeIcon icon={faFile} className="pr-1" />
              Study Resources
            </li>
          </div>
          <div>
            <li className="md:text-3xl font-bold py-1 font-serif">115+</li>
            <li>
              <FontAwesomeIcon icon={faUniversity} className="pr-1" />
              Institutions
            </li>
          </div>
          <div>
            <li className="md:text-3xl font-bold py-1 font-serif">700+</li>
            <li>
              <FontAwesomeIcon icon={faUser} className="pr-1" />
              Users
            </li>
          </div>
        </ul>
      </div>
      <div className="absolute right-2 bottom-8 w-24 md:visible hidden ">
        <img src={object2} alt="object2" />
      </div>
    </div>
  );
};

export default Section1;
