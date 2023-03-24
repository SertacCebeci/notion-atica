import React, { useState, createContext } from "react";
import example from "@/examples/example";

export const DocumentContext = createContext(example);

export const DocumentProvider = ({ children }) => {
  const [document, setDocument] = useState(example);
  return (
    <DocumentContext.Provider value={[document, setDocument]}>
      {children}
    </DocumentContext.Provider>
  );
};
