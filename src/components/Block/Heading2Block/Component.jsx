import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";

const Component = () => {
  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-3">
      <div
        className="h-6 mx-2 items-center justify-center hidden group-hover:flex"
        contentEditable={false}
        data-drag-handle
      >
        <AiOutlinePlus className="h-4 w-4 hover:cursor-pointer hover:bg-gray-300" />
        <RxDragHandleDots2 className="h-4 w-4 hover:cursor-pointer hover:bg-gray-300" />
      </div>
      <NodeViewContent className="leading-6 font-bold text-2xl w-16/20 text-start mr-10" />
    </NodeViewWrapper>
  );
};

export default Component;
