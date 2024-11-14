import React from "react";
import facebook from "../assets/facebook.png";
import footerImage from "../assets/footer.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import telegram from "../assets/telegram.png";
import twitter from "../assets/twitter.png";
import whatsapp from "../assets/whatsapp.png";

import { linkedinUrl } from "../constants/constants";

const Footer = ({ data }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${footerImage})`,
        backgroundRepeat: "no-repeat",
      }}
      className="w-[100%] md:h-503 h-760 object-cover object-center  -mt-3"
    >
      <div className="flex md:ml-20 md:gap-10  gap-3  md:pt-10 pt-5 font-robot sm:ml-10 ml-5">
        {data.map((dataItem) => (
          <div key={dataItem.id}>
            <h4 className="md:text-3xl font-bold pb-1 text-sm">
              {dataItem.title}
            </h4>
            <ul>
              {dataItem.items.map((item, index) => (
                <li
                  key={index}
                  className="py-2 md:text-lg text-xs hover:text-blue-400 cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex flex-col md:justify-self-end justify-end md:mr-20 mr-3 md:-mt-32 -mt-16 justify-self-end  ">
        <h4 className="md:text-3xl font-bold pb-2 text-sm">Newsletter</h4>
        <p className="md:text-xl text-xs font-medium pb-2">
          You can trust us. We only send promo offers,
        </p>
        <div className="flex md:gap-24  gap-5 items-center py-2">
          <span className="md:text-xl text-xs text-customWhite bg-customPurple1 py-1 px-3 ml-3">
            Your email here
          </span>
          <span className="md:text-base text-xs text-customWhite bg-customVoilet1 py-1 px-3">
            Subscribe
          </span>
        </div>

        <div className="flex text-center justify-center items-center bg-black w-44 gap-2 p-1 mt-3 ml-16">
          <a href={linkedinUrl} className="w-5  h-5 cursor-pointer">
            <img src={linkedin} alt="linkedin" />
          </a>
          <a href={facebook} className="w-5 h-5 cursor-pointer">
            <img src={facebook} alt="faecbook" />
          </a>
          <a href={instagram} className="w-5 h-5 cursor-pointer">
            <img src={instagram} alt="instagram" />
          </a>

          <a href={twitter} className="w-5 h-5 cursor-pointer">
            <img src={twitter} alt="twitter" />
          </a>
          <a href={whatsapp} className="w-5 h-5 cursor-pointer">
            <img src={whatsapp} alt="whatsapp" />
          </a>
          <a href={telegram} className="w-5 h-5 cursor-pointer">
            <img src={telegram} alt="telegram" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
