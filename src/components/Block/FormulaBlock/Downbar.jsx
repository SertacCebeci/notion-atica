import React, { useState } from "react";
import { BlockTypes } from "@/components/BlockTypes";

const Downbar = ({
  formulaAttrs,
  changeFormulaName,
  changeFormulaExpression,
  getAvailableBlocks,
}) => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleChangeFormulaName = (e) => {
    changeFormulaName(e.target.value);
    return;
  };

  const handleChangeFormulaExpression = (e) => {
    changeFormulaExpression(e.target.value);
  };

  const blocks = getAvailableBlocks().filter((block) => {
    return !!block.attrs.block_id;
  });

  const blockClick = (block) => {
    setSelectedBlock(block);
  };

  const blockDoubleClick = (block) => {
    changeFormulaExpression(
      formulaAttrs.formulaExpression + `getBlock(${block.attrs.block_id})`
    );
  };

  return (
    <div className="flex flex-col items-center justify-start h-64 w-[400px] border border-black">
      <div className="flex flex-col items-center justify-start w-full ">
        <input
          className="mt-1 pl-2 border text-sm w-18/20 font border-black text-start hover:cursor-text outline-none"
          type="text"
          defaultValue={formulaAttrs.formulaName}
          placeholder="Add Name"
          onChange={handleChangeFormulaName}
        />
        <input
          className="mt-1 pl-2 border text-sm w-18/20 border-black text-start hover:cursor-text outline-none"
          type="text"
          value={formulaAttrs.formulaExpression}
          placeholder="Add Expression"
          spellCheck={false}
          onChange={handleChangeFormulaExpression}
        />
      </div>
      <div className="w-full h-full flex items-start justify-start">
        <div className="h-full flex flex-col justify-evenly items-center">
          {blocks.map((block, index) => {
            return (
              <div
                key={block.attrs.block_id + index}
                className="w-12 border border-black text-sm rounded hover:cursor-pointer"
                onClick={() => blockClick(block)}
                onDoubleClick={() => blockDoubleClick(block)}
              >
                {block.attrs.block_id}
              </div>
            );
          })}
        </div>
        <div className="w-full h-48 overflow-y-scroll flex flex-col items-center justify-start text-center">
          <div className="w-full text-start pl-2 text-lg">
            <span className="font-bold">Block ID: </span>
            <span>{selectedBlock?.attrs.block_id}</span>
          </div>
          <div className="w-full text-start pl-2 text-sm">
            A block on test application
          </div>
          <div className="w-full text-start pl-2 text-sm">
            type: {{ BlockTypes }[selectedBlock?.type.name]?.title}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downbar;
