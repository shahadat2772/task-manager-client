import React from "react";

const NoTaskYet = ({ text }) => {
  return (
    <div className="max-w-[100vw] h-[80vh] flex justify-center items-center">
      {<h2 className="text-2xl">{text} ;(</h2>}
    </div>
  );
};

export default NoTaskYet;
