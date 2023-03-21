import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "react-tippy";
import SlashMenu from "@/components/SlashMenu/SlashMenu";

const Component = () => {
  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-2">
      <div
        className="h-6 mx-2 items-center justify-center hidden group-hover:flex"
        contentEditable={false}
        data-drag-handle
      >
        <AiOutlinePlus className="h-4 w-4 hover:cursor-pointer hover:bg-gray-300" />
        <Tooltip
          interactive
          html={<SlashMenu />}
          position="left"
          trigger="click"
        >
          <RxDragHandleDots2 className="h-4 w-4 hover:cursor-pointer hover:bg-gray-300" />
        </Tooltip>
      </div>
      <NodeViewContent className="w-16/20 text-start mr-10 text-lg" />
    </NodeViewWrapper>
  );
};

export default Component;
