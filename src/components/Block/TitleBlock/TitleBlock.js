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
        const { $from, head } = selection;
        if ($from.parent.type == this.type) {
          const isEnd = !$from.nodeAfter;
          if (isEnd) {
            editor
              .chain()
              .insertContentAt(head, {
                type: "paragraphBlock",
              })
              .focus()
              .run();

            editor.chain().selectParentNode().focus().run();
            return true;
          }
          return false;
        }
      },
      Backspace: ({ editor }) => {
        if (editor.view.nodeDOM(0).textContent === "") {
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
