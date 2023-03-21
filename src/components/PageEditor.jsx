import React, { useContext } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import History from "@tiptap/extension-history";
//import document context for state management
import DocumentContext from "@/contexts/DocumentContext";
//import custom nodes
import TitleBlock from "./Block/TitleBlock/TitleBlock";
import ParagraphBlock from "./Block/ParagraphBlock/ParagraphBlock";
import Heading1Block from "./Block/Heading1Block/Heading1Block";
import Heading2Block from "./Block/Heading2Block/Heading2Block";
import Heading3Block from "./Block/Heading3Block/Heading3Block";

const PageEditor = () => {
  const [document, setDocument] = useContext(DocumentContext);
  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Dropcursor,
      Gapcursor,
      History,
      TitleBlock,
      ParagraphBlock,
      Heading1Block,
      Heading2Block,
      Heading3Block,
    ],
    injectCSS: false,
    content: `
    <title-block>${document.title}</title-block>
    <paragraph-block>test</paragraph-block>
    <paragraph-block>test</paragraph-block>
    <paragraph-block>test</paragraph-block>
    <heading-1-block>test</heading-1-block>
    <heading-2-block>test</heading-2-block>
    <heading-3-block>test</heading-3-block>
    `,
    onUpdate: ({ editor }) => {
      document.title = editor.view.nodeDOM(0).textContent;
      setDocument(JSON.parse(JSON.stringify(document)));
    },
  });

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <EditorContent className="w-full h-full" editor={editor} />
    </div>
  );
};

export default PageEditor;
