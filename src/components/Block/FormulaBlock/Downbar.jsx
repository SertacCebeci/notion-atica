import React, { useState, useMemo } from "react";
import { BlockTypes } from "@/components/BlockTypes";

const Downbar = ({
  formulaAttrs,
  changeFormulaName,
  changeFormulaExpression,
  getAvailableBlocks,
}) => {
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedBlockPos, setSelectedBlockPos] = useState(null);

  let selectedBlockContent = useMemo(() => {
    return selectedBlock?.content?.content[0]?.text;
  }, [selectedBlock]);

  const handleChangeFormulaName = (e) => {
    changeFormulaName(e.target.value);
  };

  const handleChangeFormulaExpression = (e) => {
    changeFormulaExpression(e.target.value);
  };

  const blocks = getAvailableBlocks().filter((block) => {
    return !!block.attrs.block_id;
  });

  const blockClick = (block, index) => {
    setSelectedBlock(block);
    setSelectedBlockPos(index);
  };

  const blockDoubleClick = (block) => {
    changeFormulaExpression(
      formulaAttrs.formulaExpression +
        `getBlockContent('${block.attrs.block_id}')`
    );
  };

  return (
    <div className="bg-white flex flex-col items-center justify-start h-full w-[400px] border border-black">
      <div className="flex flex-col items-center justify-start w-full ">
        <input
          className="mt-4 pl-2 border text-sm w-18/20 font border-black text-start hover:cursor-text outline-none"
          type="text"
          defaultValue={formulaAttrs.formulaName}
          placeholder="Add Name"
          onChange={(event) => handleChangeFormulaName(event)}
        />
        <input
          className="mt-1 pl-2 border text-sm w-18/20 border-black text-start hover:cursor-text outline-none"
          type="text"
          value={formulaAttrs.formulaExpression}
          placeholder="Add Expression"
          spellCheck={false}
          onChange={(event) => handleChangeFormulaExpression(event)}
        />
      </div>
      <div className="w-full h-full mt-4 flex items-start justify-start">
        <div className="h-48 w-36 flex flex-col overflow-y-scroll justify-start items-center">
          {blocks.map((block, index) => {
            return (
              <div
                key={block.attrs.block_id + index}
                className="w-full border-t pt-4 flex items-center justify-center text-sm rounded hover:cursor-pointer"
                onClick={() => blockClick(block, index)}
                onDoubleClick={() => blockDoubleClick(block)}
              >
                <div className="text-center">{block.attrs.block_id}</div>
              </div>
            );
          })}
        </div>
        <div className="w-full h-48 ml-2 overflow-y-scroll flex flex-col items-center justify-start text-center">
          <div className="w-full text-start pl-2 ">
            <span className="font-bold">Block ID: </span>
            <span>{selectedBlock?.attrs.block_id}</span>
          </div>
          <div className="w-full text-start pl-2 text-lg">
            <span className="font-bold">Position: </span>
            <span>{selectedBlockPos ? selectedBlockPos : ""}</span>
          </div>
          <div className="w-full text-start pl-2 text-lg">
            <span className="font-bold">Type: </span>
            <span>{BlockTypes[selectedBlock?.type.name]?.title}</span>
          </div>
          <div className="w-full text-start pl-2 text-lg">
            <span className="font-bold">Content: </span>
            <span>{selectedBlockContent}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downbar;
