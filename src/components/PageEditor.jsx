import React, { useContext } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
//generic tiptap extensions
import Document from "@tiptap/extension-document";
import Text from "@tiptap/extension-text";
import Dropcursor from "@tiptap/extension-dropcursor";
import Gapcursor from "@tiptap/extension-gapcursor";
import History from "@tiptap/extension-history";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

//document context for state management
import DocumentContext from "@/contexts/DocumentContext";

//custom nodes
import TitleBlock from "./Block/TitleBlock/TitleBlock";
import ParagraphBlock from "./Block/ParagraphBlock/ParagraphBlock";
import Heading1Block from "./Block/Heading1Block/Heading1Block";
import Heading2Block from "./Block/Heading2Block/Heading2Block";
import Heading3Block from "./Block/Heading3Block/Heading3Block";
import SelectionMenu from "./SelectionMenu";

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
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
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
      <SelectionMenu editor={editor} />
      <EditorContent className="w-full h-full" editor={editor} />
    </div>
  );
};

export default PageEditor;
