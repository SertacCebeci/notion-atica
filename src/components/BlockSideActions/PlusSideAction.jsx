import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const PlusSideAction = () => {
  return (
    <div className="h-6 w-6 flex items-center justify-center hover:bg-gray-300">
      <AiOutlinePlus className="h-5 w-5 hover:cursor-pointer hidden group-hover:block" />
    </div>
  );
};

export default PlusSideAction;
