import CodeBlock from "./CodeBlock";
import { LowlightPlugin } from "./lowlightPlugin";

export const CodeBlockLowlight = CodeBlock.extend({
  addOptions() {
    return {
      ...this.parent?.(),
      lowlight: {},
      defaultLanguage: null,
    };
  },

  addProseMirrorPlugins() {
    return [
      ...(this.parent?.() || []),
      LowlightPlugin({
        name: this.name,
        lowlight: this.options.lowlight,
        defaultLanguage: this.options.defaultLanguage,
      }),
    ];
  },
});
