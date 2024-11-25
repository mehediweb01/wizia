import React from "react";
import Buttons from "./Buttons";
import { NavLink } from "react-router-dom";

const PageNotFount = () => {
  return (
    <div className="h-[85vh] flex flex-col gap-6 justify-center items-center">
      <h1 className="text-center text-7xl text-jungleGreen">
        No data is available
      </h1>
      <NavLink to={"/"}>
        <Buttons variant={"solid"}>back to home Page</Buttons>
      </NavLink>
    </div>
  );
};

export default PageNotFount;
