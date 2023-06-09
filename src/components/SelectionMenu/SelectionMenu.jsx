import React from "react";
import { BubbleMenu } from "@tiptap/react";
import { BsTypeBold, BsTypeItalic, BsTypeUnderline } from "react-icons/bs";
import TextColorMenu from "./TextColorMenu/TextColorMenu";

const SelectionMenu = ({ editor }) => {
  const showOnParagraph = () => {
    return (
      editor?.isActive("paragraphBlock") &&
      editor?.state?.selection?.to !== editor?.state?.selection?.from &&
      !editor?.state?.selection?.node
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
            onClick={() => {
              if (editor.isActive("bold")) {
                editor.chain().focus().unsetBold().run();
              } else {
                editor.chain().focus().setBold().run();
              }
            }}
            className="bg-white m-1 p-1 font-bold hover:cursor-pointer hover:bg-gray-200"
          >
            <BsTypeBold />
          </button>
          <button
            onClick={() => {
              if (editor.isActive("italic")) {
                editor.chain().focus().unsetItalic().run();
              } else {
                editor.chain().focus().setItalic().run();
              }
            }}
            className="bg-white m-1 p-1 italic hover:cursor-pointer hover:bg-gray-200"
          >
            <BsTypeItalic />
          </button>
          <button
            onClick={() => {
              if (editor.isActive("underline")) {
                editor.chain().focus().unsetUnderline().run();
              } else {
                editor.chain().focus().setUnderline().run();
              }
            }}
            className="bg-white m-1 p-1 underline hover:cursor-pointer hover:bg-gray-200"
          >
            <BsTypeUnderline />
          </button>
          <TextColorMenu editor={editor} />
        </BubbleMenu>
      )}
    </div>
  );
};

export default SelectionMenu;
