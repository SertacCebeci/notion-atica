import { Mark } from "@tiptap/core";

export const BackgroundColorMark = Mark.create({
  name: "backgroundColor",

  addAttributes() {
    return {
      color: {
        default: undefined,
        parseHTML: (element) => element.getAttribute("block-background-color"),
        renderHTML: (attributes) => ({
          "block-background-color": attributes.color,
        }),
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "span",
        getAttrs: (element) => {
          if (typeof element === "string") {
            return false;
          }

          if (element.hasAttribute("block-background-color")) {
            return {
              color: element.getAttribute("block-background-color"),
            };
          }

          return false;
        },
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setBackgroundColor:
        (color) =>
        ({ commands }) => {
          if (color !== "default") {
            return commands.setMark(this.name, { color: color });
          }
          return commands.unsetMark(this.name);
        },
    };
  },
});
