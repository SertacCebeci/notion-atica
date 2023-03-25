import React from "react";
import DotSideAction from "./DotSideAction";

const SideActions = ({ editor, getPos }) => {
  return (
    <div
      className="h-6 mr-3 flex items-start justify-center"
      contentEditable={false}
      data-drag-handle
    >
      <DotSideAction editor={editor} getPos={getPos} />
    </div>
  );
};

export default SideActions;
