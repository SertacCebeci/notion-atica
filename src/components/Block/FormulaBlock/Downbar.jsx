import React from "react";

const Downbar = ({
  formulaAttrs,
  changeFormulaName,
  changeFormulaExpression,
}) => {
  const handleChangeFormulaName = (e) => {
    changeFormulaName(e.target.value);
    return;
  };

  const handleChangeFormulaExpression = (e) => {
    changeFormulaExpression(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-start h-64 w-full border border-black">
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
  );
};

export default Downbar;
