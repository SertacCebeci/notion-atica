import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "titleBlock",
  group: "block",
  content: "inline*",

  parseHTML() {
    return [
      {
        tag: "title-block",
      },
    ];
  },

  addKeyboardShortcuts() {
    return {
      Enter: ({ editor }) => {
        const { state } = editor;
        const { selection } = state;
        const { $from, empty } = selection;
        if ($from.parent.type == this.type) {
          const titles = editor.view.docView.children.filter((block) => {
            return block.node.type.name == "titleBlock";
          });
          return true;
        }
      },
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["title-block", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
