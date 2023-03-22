import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import { RxDragHandleDots2 } from "react-icons/rx";
import { AiOutlinePlus } from "react-icons/ai";
import { Tooltip } from "react-tippy";
import SlashMenu from "@/components/SlashMenu/SlashMenu";

const BlockSidebar = () => {
  return;
};

const Component = () => {
  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-2">
      <div
        className="h-6 mx-2 flex items-center justify-center"
        contentEditable={false}
        data-drag-handle
      >
        <AiOutlinePlus className="h-4 w-4 hover:cursor-pointer hidden group-hover:block hover:bg-gray-300" />
        <Tooltip
          interactive={true}
          position="left"
          html={<SlashMenu />}
          trigger="click"
        >
          <RxDragHandleDots2 className="h-4 w-4 hover:cursor-pointer  hidden group-hover:block hover:bg-gray-300" />
        </Tooltip>
      </div>
      <NodeViewContent className="w-16/20 text-start mr-10 text-lg" />
    </NodeViewWrapper>
  );
};

export default Component;
