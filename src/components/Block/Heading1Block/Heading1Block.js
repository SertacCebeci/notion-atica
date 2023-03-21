import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "heading1Block",
  group: "block",
  content: "inline*",
  draggable: true,

  parseHTML() {
    return [
      {
        tag: "heading-1-block",
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
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["heading-1-block", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
