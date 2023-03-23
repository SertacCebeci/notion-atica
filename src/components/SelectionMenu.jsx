import React from "react";
import { BubbleMenu } from "@tiptap/react";

const SelectionMenu = ({ editor }) => {
  const showOnParagraph = () => {
    return (
      editor.isActive("paragraphBlock") &&
      editor.state.selection.to !== editor.state.selection.from
    );
  };
  return (
    <div>
      {editor && (
        <BubbleMenu
          className="bg-white flex items-center justify-between border border-black rounded"
          shouldShow={showOnParagraph}
          editor={editor}
          tippyOptions={{ duration: 10 }}
        >
          <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={`bg-white m-1 p-1 font-bold ${
              editor.isActive("bold") ? "bg-gray-200" : "bg-white"
            }`}
          >
            Bold
          </button>
          <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={`bg-white m-1 p-1 px-1 italic ${
              editor.isActive("italic") ? "bg-gray-200" : "bg-white"
            }`}
          >
            Italic
          </button>
          <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={`bg-white m-1 p-1 underline ${
              editor.isActive("underline") ? "bg-gray-200" : "bg-white"
            }`}
          >
            Underline
          </button>
        </BubbleMenu>
      )}
    </div>
  );
};

export default SelectionMenu;
