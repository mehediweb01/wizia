import React from "react";
import Buttons from "./../Buttons";
import { LuArrowUpRightSquare } from "react-icons/lu";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='bg-[url("/heroImg.png")] bg-no-repeat bg-cover sm:px-10 px-4 w-full sm:py-[110px] pb-[72px] pt-11 space-y-[10px]'>
      <motion.h4
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="text-primary font-Montserrat sm:text-2xl text-base sm:leading-7 leading-5 tracking-[5%] md:text-start text-center"
      >
        AI SDRs (aiDRs)
      </motion.h4>
      <h1 className="font-Montserrat font-bold sm:text-[64px] text-[40px] text-white sm:max-w-md sm:leading-[78px] leading-[44px] sm:text-start text-center -tracking-[1%]">
        More leads, less people.
      </h1>
      <motion.p
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="font-workSans font-[300] sm:text-xl text-[18px] text-white max-w-lg sm:text-start text-center sm:leading-[26px] leading-[23px] -tracking-[1%]"
      >
        Train an aiDR on your ICP and messaging matrix. Activate it on a patch.
        It will send personalized sequences to every target contact.
      </motion.p>
      <div className="flex sm:justify-start justify-center">
        <Buttons variant={"solid"}>
          Sign Up for the Beta <LuArrowUpRightSquare />
        </Buttons>
      </div>
    </div>
  );
};

export default Hero;
