import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";
import SideActions from "@/components/BlockSideActions/SideActions";

const Component = ({ editor, getPos }) => {
  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-2">
      <SideActions editor={editor} getPos={getPos} />
      <NodeViewContent className="w-16/20 text-start mr-10 text-lg" />
    </NodeViewWrapper>
  );
};

export default Component;
