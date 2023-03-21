import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React from "react";
const Component = () => {
  return (
    <NodeViewWrapper className="w-full h-48 flex items-end justify-end group">
      <NodeViewContent className="leading-10 font-bold text-4xl w-16/20 text-start m-10" />
    </NodeViewWrapper>
  );
};

export default Component;
