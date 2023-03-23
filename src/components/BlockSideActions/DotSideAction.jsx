/* eslint-disable */
import React, { forwardRef, useState } from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import DotMenu from "../DotMenu/DotMenu";
import Tippy from "@tippyjs/react";

const DotIcon = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="h-6 w-6 flex items-center justify-center hover:bg-gray-300"
    >
      <RxDragHandleDots2 className="h-5 w-5 hover:cursor-pointer  hidden group-hover:block" />
    </div>
  );
});

const DotSideAction = ({ editor, getPos }) => {
  return (
    <div>
      <Tippy
        placement="left"
        interactive={true}
        content={<DotMenu editor={editor} getPos={getPos} />}
        trigger="click"
        duration={[10, 10]}
      >
        <DotIcon />
      </Tippy>
    </div>
  );
};

export default DotSideAction;
