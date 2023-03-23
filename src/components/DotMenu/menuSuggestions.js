const menuSuggestions = {
  items: ({ query }) => {
    return [
      {
        title: "H1",
        section: "basic",
        desc: "Big section heading",
        shortcut: "Mod-Alt-1",
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
        shortcut: "Mod-Alt-2",
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
        shortcut: "Mod-Alt-3",
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
        shortcut: "Mod-Alt-p",
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
