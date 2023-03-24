import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";

import Component from "./Component";

export default Node.create({
  name: "paragraphBlock",
  group: "block",
  content: "inline*",
  draggable: true,
  priority: 1000,

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
        const { $from, head } = selection;
        if ($from.parent.type == this.type) {
          const isEnd = !$from.nodeAfter;
          if (isEnd) {
            editor
              .chain()
              .insertContentAt(head, {
                type: this.type.name,
              })
              .focus()
              .run();

            editor.chain().selectParentNode().focus().run();
            return true;
          }
          return false;
        }
      },
      "Mod-Alt-p": () =>
        this.editor.chain().focus().setNode("paragraphBlock").run(),
      //just used for testing
      "Mod-Alt-l": () => {
        console.log(this.editor.getJSON());
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
