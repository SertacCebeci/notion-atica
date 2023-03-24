import { mergeAttributes, Node } from "@tiptap/core";
import { ReactNodeViewRenderer } from "@tiptap/react";
import Component from "./Component";

export default Node.create({
  name: "formulaBlock",
  group: "block",
  content: "inline*",
  draggable: true,

  addAttributes() {
    return {
      formulaName: {
        default: "",
      },
      formulaExpression: {
        default: "",
      },
      formulaResult: {
        default: "",
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "formula-block",
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
      "Mod-Alt-f": ({ editor }) => {
        editor.chain().focus().toggleNode("formulaBlock").run();
      },
      //change it to delete when content empty and backspace clicked
    };
  },

  renderHTML({ HTMLAttributes }) {
    return ["formula-block", mergeAttributes(HTMLAttributes), 0];
  },

  addNodeView() {
    return ReactNodeViewRenderer(Component);
  },
});
