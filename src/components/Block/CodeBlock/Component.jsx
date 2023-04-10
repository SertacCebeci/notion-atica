/* eslint-disable */
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import React, { useState } from "react";
import SideActions from "@/components/BlockSideActions/SideActions";
import ResultTable from "./ResultsTable";

const Component = ({ editor, node, getPos }) => {
  const [results, setResults] = useState([]);
  const callQueryRunner = async () => {
    const blockText = node.content.content[0].text;

    try {
      const res = await fetch("/api/queryrunner", {
        method: "POST",
        body: JSON.stringify({ query: blockText }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const body = await res.json();
      if (body) {
        setResults(body);
      } else {
        setResults([]);
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <NodeViewWrapper className="w-full h-full flex flex-col items-center justify-end group">
      <div className="w-full h-full flex items-center justify-end relative my-4 ">
        <SideActions editor={editor} getPos={getPos} />
        <NodeViewContent className="bg-[#0d0d0d] text-white leading-10 w-16/20 text-start mr-10 px-2" />
        <button
          className="bg-white border border-black rounded-sm m-2 w-24 z-10 absolute bottom-0 right-10"
          onClick={callQueryRunner}
        >
          run
        </button>
      </div>
      <ResultTable results={results} />
    </NodeViewWrapper>
  );
};

export default Component;
