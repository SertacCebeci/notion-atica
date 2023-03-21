const menuSuggestions = {
  items: ({ query }) => {
    return [
      {
        title: "H1",
        section: "basic",
        desc: "Big section heading",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading-1-block")
            .run();
        },
      },
      {
        title: "H2",
        section: "basic",
        desc: "Medium section heading",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading-2-block")
            .run();
        },
      },
      {
        title: "H3",
        section: "basic",
        desc: "Small section heading",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("heading-3-block")
            .run();
        },
      },
      {
        title: "Paragraph",
        section: "basic",
        desc: "Just start with simple paragraph",
        command: ({ editor, range }) => {
          editor
            .chain()
            .focus()
            .deleteRange(range)
            .setNode("paragraph-block")
            .run();
        },
      },
    ].filter((element) => {
      if (query === "") {
        return true;
      }
      return element.title.toLowerCase().includes(query);
    });
  },
};

export default menuSuggestions;
