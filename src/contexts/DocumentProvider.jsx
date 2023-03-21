import React, { useState, useReducer } from "react";
import Document from "@/models/Document";
import example from "@/examples/example";
import DocumentContext from "./DocumentContext";
// change this to use Reducer and respected functions using the Document Model

export const DocumentProvider = ({ children }) => {
  const [document, setDocument] = useState(Document.getInstance(example));
  return (
    <DocumentContext.Provider value={[document, setDocument]}>
      {children}
    </DocumentContext.Provider>
  );
};
