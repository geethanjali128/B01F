import React from "react";
import {
  advantages,
  faqs,
  feautures,
  footerData,
  services,
} from "../constants/Data";
import Advantages from "./Advantages";
import FAQS from "./FAQS";
import Feautures from "./Feautures";
import Footer from "./Footer";
import Hero from "./Hero";
import Section1 from "./Section1";
import Section2 from "./Section2";
import Services from "./Services";

const Home = () => {
  return (
    <div>
      <Hero />
      <Section1 />
      <Section2 />
      <Feautures data={feautures} />
      <Services data={services} />
      <Advantages data={advantages} />
      <FAQS data={faqs} />
      <Footer data={footerData} />
    </div>
  );
};

export default Home;
