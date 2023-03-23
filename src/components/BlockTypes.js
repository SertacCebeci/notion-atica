const BlockTypes = {
  paragraphBlock: {
    NodeType: "paragraphBlock",
    tag: "paragraph-block",
    title: "Paragraph",
    image: "paragraph",
    desc: "Just start with simple paragraph",
    shortcut: "Mod-Alt-p",
    blockSection: "basic",
  },
  heading1Block: {
    NodeType: "heading1Block",
    tag: "heading-1-block",
    title: "H1",
    image: "h1",
    desc: "Big section heading",
    shortcut: "Mod-Alt-1",
    blockSection: "basic",
  },
  heading2Block: {
    NodeType: "heading2Block",
    tag: "heading-2-block",
    title: "H2",
    image: "h2",
    desc: "Medium section heading",
    shortcut: "Mod-Alt-2",
    blockSection: "basic",
  },
  heading3Block: {
    NodeType: "heading3Block",
    tag: "heading-3-block",
    title: "H3",
    image: "h3",
    desc: "Small section heading",
    shortcut: "Mod-Alt-3",
    blockSection: "basic",
  },
  formulaBlock: {
    NodeType: "formulaBlock",
    tag: "formula-block",
    title: "Formula",
    image: "formula",
    desc: "Add a formula",
    shortcut: "Mod-Alt-f",
    blockSection: "interactive",
  },
};
export default BlockTypes;
