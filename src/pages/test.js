import React from "react";
import Head from "next/head";
import EvaluateExpression from "@/components/Block/FormulaBlock/EvaluateExpression";

export default function Home() {
  return (
    <>
      <div>
        <EvaluateExpression expression={"sum(1,2,3,4,5) + getBlock('8910e')"} />
      </div>
    </>
  );
}
