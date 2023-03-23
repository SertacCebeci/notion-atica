import React from "react";
import DotSideAction from "./DotSideAction";
import PlusSideAction from "./PlusSideAction";

const SideActions = ({ editor, getPos }) => {
  return (
    <div
      className="h-6 mx-2 flex items-center justify-center"
      contentEditable={false}
      data-drag-handle
    >
      <PlusSideAction />
      <DotSideAction editor={editor} getPos={getPos} />
    </div>
  );
};

export default SideActions;
