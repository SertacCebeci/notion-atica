import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React, { forwardRef } from "react";
import SideActions from "@/components/BlockSideActions/SideActions";
import Downbar from "./Downbar";
import Tippy from "@tippyjs/react";

const FormulaContent = forwardRef(function content(props, ref) {
  return (
    <div
      ref={ref}
      className="flex item-center justify-start hover:cursor-pointer"
    >
      <div className="rounded text-start text-lg mr-2 px-1 hover:bg-gray-100">
        {props.formulaResult ? props.formulaResult : "Invalid"}
      </div>
    </div>
  );
});

const Component = (props) => {
  const changeFormulaName = (name) => {
    props.updateAttributes({
      formulaName: name,
    });
  };

  const getAvailableBlocks = () => {
    return props.editor.state.doc.content.content;
  };

  getAvailableBlocks();
  const changeFormulaExpression = (expression) => {
    const result = evalFormulaExpression(expression);
    props.updateAttributes({
      formulaExpression: expression,
      formulaResult: result,
    });
  };

  const evalFormulaExpression = (expression) => {
    if (expression === "irem") {
      return "iremvalid";
    }
    return "Invalid";
  };

  return (
    <NodeViewWrapper
      draggable={true}
      className="w-full h-full flex items-start justify-end group my-2"
    >
      <SideActions editor={props.editor} getPos={props.getPos} />
      <div className="w-16/20 flex mr-10 items-center">
        <div contentEditable={false}>
          <Tippy
            placement="bottom-start"
            interactive={true}
            content={
              <Downbar
                formulaAttrs={props.node.attrs}
                changeFormulaName={changeFormulaName}
                changeFormulaExpression={changeFormulaExpression}
                getAvailableBlocks={getAvailableBlocks}
              />
            }
            showOnCreate={true}
            trigger="click"
          >
            <FormulaContent formulaResult={props.node.attrs.formulaResult} />
          </Tippy>
        </div>
        <NodeViewContent className="w-full text-start" />
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
/* const Component = ({ editor, getPos }) => {
  return (
    <NodeViewWrapper className="w-full h-full flex items-center justify-end group my-2">
      <SideActions editor={editor} getPos={getPos} />
      <NodeViewContent className="w-16/20 text-start mr-10 text-lg" />
    </NodeViewWrapper>
  );
};

export default Component; */
