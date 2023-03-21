import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "paragraphBlock",
  group: "block",
  content: "inline*",
  draggable: true,
  priority: 1000,

  addAttributes() {
    return {
      count: {
        default: 0,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "paragraph-block",
      },
    ];
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from } = selection;
        console.log(this.type);
        if ($from.parent.type == this.type) {
          return false;
        }
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["paragraph-block", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
