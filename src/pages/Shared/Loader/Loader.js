import React from "react";
import { ClockLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="max-w-100vw h-[100vh] flex justify-center items-center">
      <ClockLoader color="blueviolet" />
    </div>
  );
};

export default Loader;
