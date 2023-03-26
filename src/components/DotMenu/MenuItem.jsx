import Image from "next/image";
import React from "react";

const SlashMenuItem = ({ suggestion, editor, getPos }) => {
  // add keyboard shortcut handle node selection

  const handleClick = () => {
    editor.chain().setNodeSelection(getPos()).run();
    editor.chain().keyboardShortcut(suggestion.shortcut).run();
  };
  return (
    <div
      className="w-full h-[46px] flex item-start justify-start my-2 hover:cursor-pointer"
      onClick={handleClick}
    >
      <Image
        src={`/${suggestion.image.toLowerCase()}.png`}
        alt={suggestion.title}
        className="border border-black mr-2 self-start"
        width={46}
        height={46}
      />
      <div className="h-[46px]">
        <div className="text-lg text-start leading-3 font-bold mb-2">
          {suggestion.title}
        </div>
        <div className="text-sm">{suggestion.desc}</div>
      </div>
    </div>
  );
};

export default SlashMenuItem;
