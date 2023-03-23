import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "heading2Block",
  group: "block",
  content: "inline*",
  draggable: true,

  parseHTML() {
    return [
      {
        tag: "heading-2-block",
      },
    ];
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from } = selection;
        if ($from.parent.type == this.type) {
          return false;
        }
      },
      "Mod-Alt-2": () =>
        this.editor.chain().focus().setNode("heading2Block").run(),
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["heading-2-block", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
