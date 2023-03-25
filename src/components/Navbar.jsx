import React, { useContext, useCallback } from "react";
import { FaGreaterThan } from "react-icons/fa";
import { DocumentContext } from "@/contexts/DocumentProvider";
import Image from "next/image";

const Navbar = () => {
  const [document, setDocument] = useContext(DocumentContext);

  const findTitleBlockText = () => {
    const title = document.content.filter((block) => {
      return block.type === "titleBlock";
    })[0];

    if (!Array.isArray(title?.content)) {
      return "Untitled";
    }
    return title.content[0]?.text;
  };

  return (
    <div className="w-full h-16 shadow-xl flex justify-between items-center px-2">
      <div className="flex items-center text-xl font-bold mx-8">
        <Image src="/../public/synnada.png" alt="/" width={30} height={45} />
        <span className="ml-1">Notionatica</span>
      </div>
      <div className="flex justify-end items-center px-2 mx-10 ">
        <div className="mr-2 text-sm font-normal">Ali Sertaç Cebeci</div>
        <div className="mr-2 text-sm">
          <FaGreaterThan />
        </div>
        <div className="w-36 truncate mr-2 text-sm font-bold">
          {findTitleBlockText()}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
