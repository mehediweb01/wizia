import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Offers from "./Offers";
import Train from "./Train";
import Carousel from "./Carousel";
import Effort from "./Effort";
import GetStarted from "./GetStarted";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-jungleGreen">
      <Hero />
      <Partners />
      <Offers />
      <Train />
      <Carousel />
      <Effort />
      <GetStarted />
      <Footer />
    </div>
  );
};

export default HomePage;
