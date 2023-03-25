import React, { useContext, useMemo } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
//you gotta use tiptap/html while server-side rendering which you cannot download via npm because it is a pro feature so... just copy it
import { generateHTML } from "./Extensions/html";
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
import { DocumentContext } from "@/contexts/DocumentProvider";

//custom nodes
import TitleBlock from "./Block/TitleBlock/TitleBlock";
import Placeholder from "@tiptap/extension-placeholder";
import UniqueID from "./Extensions/UniqueID";
import ParagraphBlock from "./Block/ParagraphBlock/ParagraphBlock";
import Heading1Block from "./Block/Heading1Block/Heading1Block";
import Heading2Block from "./Block/Heading2Block/Heading2Block";
import Heading3Block from "./Block/Heading3Block/Heading3Block";
import FormulaBlock from "./Block/FormulaBlock/FormulaBlock";
import SelectionMenu from "./SelectionMenu/SelectionMenu";
import slashCommands from "./Extensions/SlashCommand/slashCommands";
import suggestion from "./Extensions/SlashCommand/suggestion";

import EvaluateExpression from "./Block/FormulaBlock/EvaluateExpression";

const PageEditor = () => {
  const [document, setDocument] = useContext(DocumentContext);

  const editor = useEditor({
    extensions: [
      Document,
      Text,
      Dropcursor,
      Gapcursor,
      History,
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
      TitleBlock,
      UniqueID,
      ParagraphBlock,
      Heading1Block,
      Heading2Block,
      Heading3Block,
      FormulaBlock,
      slashCommands.configure({
        suggestion,
      }),
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "titleBlock") {
            return "Untitled";
          }
        },
      }),
    ],
    injectCSS: false,
    content: generateHTML(document, [
      Document,
      Text,
      Dropcursor,
      Gapcursor,
      History,
      Bold,
      Italic,
      Underline,
      TextStyle,
      Color,
      TitleBlock,
      UniqueID,
      ParagraphBlock,
      Heading1Block,
      Heading2Block,
      Heading3Block,
      FormulaBlock,
    ]),
    onUpdate: ({ editor }) => {
      setDocument(editor.getJSON());
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
