import React from "react";

const Downbar = ({
  formulaAttrs,
  changeFormulaName,
  changeFormulaExpression,
  getAvailableBlocks,
}) => {
  const handleChangeFormulaName = (e) => {
    changeFormulaName(e.target.value);
    return;
  };

  const handleChangeFormulaExpression = (e) => {
    changeFormulaExpression(e.target.value);
  };

  const blocks = getAvailableBlocks();

  return (
    <div className="flex flex-col items-center justify-start h-64 w-full border border-black">
      <div className="flex flex-col items-center justify-start w-full ">
        <input
          className="px-2 mx-1 mt-1 border border-black text-start hover:cursor-text outline-none"
          type="text"
          value={formulaAttrs.formulaName}
          placeholder="Add Name"
          onChange={handleChangeFormulaName}
        />
        <input
          className="px-2 mx-1 mt-1 border border-black text-start hover:cursor-text outline-none"
          type="text"
          value={formulaAttrs.formulaExpression}
          placeholder="Add Expression"
          onChange={handleChangeFormulaExpression}
        />
      </div>
      <div className="flex items-start justify-between">
        <div className="flex flex-col items-start justify-start">
          {blocks &&
            blocks.map((block) => {
              return (
                <div key={block.attrs.block_id}>{block.attrs.block_id}</div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Downbar;
