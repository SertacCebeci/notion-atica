/* eslint-disable */
import { NodeViewContent, NodeViewWrapper } from "@tiptap/react";
import { Menu } from "@mantine/core";
import React, { useState, useRef } from "react";
import SideActions from "@/components/BlockSideActions/SideActions";

const Component = ({ editor, node, getPos, updateAttributes }) => {
  const inputRef = useRef();
  const setImageSource = () => {
    updateAttributes({
      src: inputRef.current.value,
    });
  };
  return (
    <NodeViewWrapper className="w-full h-full flex items-start justify-end group my-4">
      <SideActions editor={editor} getPos={getPos} />
      <div className="w-16/20 text-start mr-10">
        <div className="relative">
          <Menu position="top" offset={8}>
            <Menu.Target>
              <button className="absolute top-2 left-2 text-sm font-bold border border-black p-2 rounded bg-white">
                change image
              </button>
            </Menu.Target>
            <Menu.Dropdown>
              <div className="flex flex-col items-center justify-around">
                <input
                  ref={inputRef}
                  className="my-4 pl-2 border text-sm w-18/20 font border-black text-start hover:cursor-text outline-none"
                  type="text"
                  defaultValue={node.attrs.src}
                  placeholder="Image Source"
                />
                <button
                  onClick={setImageSource}
                  className="text-sm font-bold border border-black p-2 rounded bg-white"
                >
                  set image
                </button>
              </div>
            </Menu.Dropdown>
          </Menu>
          <img
            className="border border-black rounded-md"
            src={node.attrs.src}
            alt={node.attrs.alt}
          />
        </div>
      </div>
    </NodeViewWrapper>
  );
};

export default Component;
