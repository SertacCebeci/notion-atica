import React from "react";
import PageEditor from "./PageEditor";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center">
        <PageEditor />
      </div>
    </div>
  );
};

export default Main;
