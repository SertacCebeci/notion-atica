import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import SideActions from "@/components/BlockSideActions/SideActions";

const Component = ({ editor, getPos }) => {
  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-3">
      <SideActions editor={editor} getPos={getPos} />
      <NodeViewContent className="leading-6 font-bold text-2xl w-16/20 text-start mr-10" />
    </NodeViewWrapper>
  );
};

export default Component;
