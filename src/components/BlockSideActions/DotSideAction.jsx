import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import DotMenu from "../DotMenu/DotMenu";
import { Tooltip } from "react-tippy";

const DotSideAction = ({ editor, getPos }) => {
  return (
    <div>
      <Tooltip
        interactive={true}
        position="left"
        html={<DotMenu editor={editor} getPos={getPos} />}
        unmountHTMLWhenHide={true}
        trigger="click"
      >
        <RxDragHandleDots2 className="h-4 w-4 hover:cursor-pointer  hidden group-hover:block hover:bg-gray-300" />
      </Tooltip>
    </div>
  );
};

export default DotSideAction;
