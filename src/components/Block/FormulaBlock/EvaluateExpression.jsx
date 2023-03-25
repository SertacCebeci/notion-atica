// TODO: Handle with either monad and transpile in order to avoid security issues"import React, { useContext } from "react";
import React, { useMemo, useContext } from "react";
import { DocumentContext } from "@/contexts/DocumentProvider";

const EvaluateExpression = ({ expression }) => {
  const [document, setDocument] = useContext(DocumentContext);

  const getBlockContent = (blockID) => {
    const block = document.content.find((block) => {
      return block?.attrs?.block_id === blockID;
    });
    const content = block.content[0].text;
    if (isNaN(content * 1)) {
      return content;
    } else {
      return content * 1;
    }
  };

  const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);
  const mult = (...args) => args.reduce((acc, curr) => acc * curr, 1);
  const length = (str) => str.length;
  const left = (str, point) => str.substring(0, point);
  const right = (str, point) => str.substring(str.length - point, str.length);
  const lower = (str) => str.toLowerCase();
  const upper = (str) => str.toUpperCase();
  const proper = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const evaluateResult = (expr) => {
    let result = "Invalid";
    try {
      result = eval(expr);
      if (typeof result !== "string" && typeof result !== "number") {
        result = "Invalid";
      }
    } catch (error) {
      result = "Invalid";
    }
    return result;
  };

  const formulaResult = useMemo(
    () => evaluateResult(expression),
    [expression, document]
  );

  return (
    <div>
      <span>{formulaResult}</span>
    </div>
  );
};

export default EvaluateExpression;
