import Buttons from "./Buttons";
import { NavLink } from "react-router-dom";
import { TbError404 } from "react-icons/tb";

const PageNotFount = () => {
  return (
    <div className="bg-jungleGreen lg:h-[88.4vh] h-[86.6vh]  flex flex-col gap-6 justify-center items-center">
      <h1 className="text-center sm:text-6xl text-3xl text-primary font-bold font-Montserrat max-w-3xl leading-10 sm:leading-[68px]">
        <TbError404 className="w-full mx-auto size-[100px] sm:size-[140px] md:size-[170px]" />
        No data is available for this page
      </h1>
      <NavLink to={"/"}>
        <Buttons variant={"solid"}>back to home Page</Buttons>
      </NavLink>
      <p className="font-workSans text-primary sm:text-2xl tex-xl text-center font-semibold tracking-[2px]">
        Or click the logo
      </p>
    </div>
  );
};

export default PageNotFount;
