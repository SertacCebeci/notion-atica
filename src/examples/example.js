//latrer replace with valid uuids
const example = {
  id: "document-id",
  title: "My Example Document",
  blocks: ["block1", "block2", "block3", "block4", "block5"],
  blockHash: {
    block1: {
      id: "block1",
      type: "h1",
      content: "Welcome to My Document",
    },
    block2: {
      id: "block2",
      type: "paragraph",
      content: "This is an introductory paragraph with some basic information.",
    },
    block3: {
      id: "block3",
      type: "h2",
      content: "Section 1",
    },
    block4: {
      id: "block4",
      type: "paragraph",
      content: "Here is the first section of my document.",
    },
    block5: {
      id: "block5",
      type: "formula",
      content: "SUM(5, 10, 15)",
    },
  },
};

export default example;
