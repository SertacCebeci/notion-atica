import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "paper",

  group: "block",

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
        tag: 'div[data-type="paper"]',
      },
    ];
  },

  addKeyboardShortcuts() {
    return {
      "Mod-Alt-f": ({ editor }) => {
        editor
          .chain()
          .focus()
          .insertContent({
            type: this.name,
          })
          .run();
      },
      //change it to delete when content empty and backspace clicked
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", mergeAttributes(HTMLAttributes, { "data-type": "paper" })];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
