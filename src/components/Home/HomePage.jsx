import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";
import Offers from "./Offers";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-jungleGreen">
      <Hero />
      <Partners />
      <Offers />
    </div>
  );
};

export default HomePage;
