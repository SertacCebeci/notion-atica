const example = {
  type: "doc",
  content: [
    {
      type: "titleBlock",
      attrs: {
        block_id: "3a22k",
      },
      content: [
        {
          type: "text",
          text: "Notionatica Example",
        },
      ],
    },
    {
      type: "heading1Block",
      attrs: {
        block_id: "142d2",
      },
      content: [
        {
          type: "text",
          text: "This is the H1 block",
        },
      ],
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "dcd63",
      },
      content: [
        {
          type: "text",
          text: "This is the H2 block",
        },
      ],
    },
    {
      type: "heading3Block",
      attrs: {
        block_id: "61fde",
      },
      content: [
        {
          type: "text",
          text: "This is the H3 block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "49800",
      },
      content: [
        {
          type: "text",
          text: "This paragraph block",
        },
      ],
    },
    {
      type: "formulaBlock",
      attrs: {
        block_id: "f5100",
        formulaName: "Example Formula",
        formulaExpression:
          "sum(getBlockContent('8c60c'),getBlockContent('fa10a'))",
      },
      content: [
        {
          type: "text",
          text: "This formula block takes the values of the following two blocks as a number",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "8c60c",
      },
      content: [
        {
          type: "text",
          text: "4",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "fa10a",
      },
      content: [
        {
          type: "text",
          text: "5",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "c6b7d",
      },
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "273af",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "This ",
        },
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "rgb(77, 100, 97)",
              },
            },
          ],
          text: "is ",
        },
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "rgb(105, 64, 165)",
              },
            },
          ],
          text: "a ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(0, 0, 0)",
              },
            },
          ],
          text: "fancy",
        },
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "rgb(155, 154, 151)",
              },
            },
          ],
          text: " ",
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(223, 171, 1)",
              },
            },
          ],
          text: "paragraph",
        },
        {
          type: "text",
          marks: [
            {
              type: "textStyle",
              attrs: {
                color: "rgb(155, 154, 151)",
              },
            },
          ],
          text: " ",
        },
        {
          type: "text",
          marks: [
            {
              type: "underline",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(224, 62, 62)",
              },
            },
          ],
          text: "block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "1888e",
      },
      content: [
        {
          type: "text",
          text: "complete the / for changing this block in to desired block type",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "c5a60",
      },
      content: [
        {
          type: "text",
          text: "You know you can order blocks by dragging them with the dots icon on the side",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "0a91c",
      },
      content: [
        {
          type: "text",
          text: "Also, try clicking the dots icon",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "cdc92",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "Made by ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
            {
              type: "italic",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(224, 62, 62)",
              },
            },
          ],
          text: "Ali Sertaç Cebeci",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "b6840",
      },
    },
  ],
};

export default example;
