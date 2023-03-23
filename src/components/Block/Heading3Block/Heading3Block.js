import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "heading3Block",
  group: "block",
  content: "inline*",
  draggable: true,

  parseHTML() {
    return [
      {
        tag: "heading-3-block",
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
      "Mod-Alt-3": () =>
        this.editor.chain().focus().setNode("heading3Block").run(),
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["heading-3-block", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
