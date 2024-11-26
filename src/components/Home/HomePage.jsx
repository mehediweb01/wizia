import React from "react";
import Hero from "./Hero";
import Partners from "./Partners";

const HomePage = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto bg-jungleGreen">
      <Hero />
      <Partners />
    </div>
  );
};

export default HomePage;
