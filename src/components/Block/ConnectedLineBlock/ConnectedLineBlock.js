import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

export default Node.create({
  name: "connectedLineBlock",
  group: "block",
  draggable: true,
  atom: true,
  selectable: false,
  addAttributes() {
    return {
      lines: {
        default: [],
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: 'div[data-type="connected-line-block"]',
      },
    ];
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": ({ editor }) => {
        editor
          .chain()
          .focus()
          .deleteCurrentNode()
          .insertContent([
            {
              type: this.name,
            },
          ])
          .run();
      },
      //change it to delete when content empty and backspace clicked
    };
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": ({ editor }) => {
        editor
          .chain()
          .focus()
          .deleteCurrentNode()
          .insertContent([
            {
              type: this.name,
            },
          ])
          .run();
      },
      //change it to delete when content empty and backspace clicked
    };
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "connected-line-block" }),
    ];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
