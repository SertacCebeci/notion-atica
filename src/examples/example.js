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
          text: "Notion-atica",
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
          text: "About the Challenge",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "3fb5a",
      },
      content: [
        {
          type: "text",
          text: "As a candidate for the front-end engineer position, I built a single-document notebook with a focus on composability and collaboration. I built various blocks, such as a text block with style options, a heading block with three alternatives, a formula block for contextual computations, an image block, and a chart block with basic interaction options. The rest of the document provides more detailed information about the features.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "eb3b7",
      },
    },
    {
      type: "heading1Block",
      attrs: {
        block_id: "cda45",
      },
      content: [
        {
          type: "text",
          text: "Block & Other Components",
        },
      ],
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "ba156",
      },
      content: [
        {
          type: "text",
          text: "Side Menu & Composability",
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
          text: "Each block has a side menu that uses six dots icon. The menu component allows you to open the block menu and reorder via drag-and-drop.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "ec220",
      },
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "b234e",
      },
      content: [
        {
          type: "text",
          text: "“ / ” Command",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "c7ce3",
      },
      content: [
        {
          type: "text",
          text: "The “",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "/",
        },
        {
          type: "text",
          text: "” is a shortcut for the block menu.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "465d1",
      },
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "4eaf1",
      },
      content: [
        {
          type: "text",
          text: "Text Block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "1a92d",
      },
      content: [
        {
          type: "text",
          text: "I used Tailwind CSS for the style of the",
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
                color: "rgb(51, 126, 169)",
              },
            },
          ],
          text: " ",
        },
        {
          type: "text",
          text: "text. The text block supports ",
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
                color: "rgb(51, 126, 169)",
              },
            },
          ],
          text: "colorful,",
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
          ],
          text: " ",
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
                color: "rgb(212, 76, 71)",
              },
            },
          ],
          text: "bold,",
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
          ],
          text: " ",
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
                color: "rgb(144, 101, 176)",
              },
            },
          ],
          text: "and",
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
          ],
          text: " ",
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
                color: "rgb(68, 131, 97)",
              },
            },
          ],
          text: "italic",
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
          ],
          text: " ",
        },
        {
          type: "text",
          text: "style options, you can double-click on any word to try it.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "14398",
      },
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "15de5",
      },
      content: [
        {
          type: "text",
          text: "Formula Block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "c01f9",
      },
      content: [
        {
          type: "text",
          text: "I built a formula block that can get content from other blocks and make computations.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "facc8",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "1) ",
        },
        {
          type: "text",
          text: "Use the ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "getBlockContent(",
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "blockID)",
        },
        {
          type: "text",
          text: " command to get the content of other blocks. Formula block allows you to use ",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "sum, mult, left, right, length, proper, upper, lower ",
        },
        {
          type: "text",
          text: "functions and",
        },
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: " operators",
        },
        {
          type: "text",
          text: ".",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "79f69",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "Example syntaxes are:",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "69b23",
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
          text: "a. ",
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
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "function(getBlockContent(blockID))",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "b56d6",
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
          text: "b. ",
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
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "(getBlockContent(blockID)",
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
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "operator",
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
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "(getBlockContent(blockID)",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "0929c",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "c. 10*2/4 + length(getBlockContent(blockID)",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "c7ba0",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
            {
              type: "textStyle",
              attrs: {
                color: "rgb(11, 110, 153)",
              },
            },
          ],
          text: "d. proper(getBlockContent(blockID))",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "676ff",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "2) ",
        },
        {
          type: "text",
          text: "Formula block is designed as an inline-block type therefore you can type text next to it.",
        },
      ],
    },
    {
      type: "heading3Block",
      attrs: {
        block_id: "e4a06",
      },
      content: [
        {
          type: "text",
          text: "Formula Block Example",
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
          text: "This formula block uses the sum function on the following two blocks.",
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
          text: "10",
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
        block_id: "9e3ad",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: "P.S: You can double-click any block id on the formula modal for adding ",
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
          ],
          text: '"getBlockContent(BlockID)"',
        },
        {
          type: "text",
          marks: [
            {
              type: "italic",
            },
          ],
          text: " to the formula expression",
        },
      ],
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "95a1e",
      },
      content: [
        {
          type: "text",
          text: "Chart Block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "2cbf8",
      },
      content: [
        {
          type: "text",
          text: "After discussing the chart block with Kuter and Mete, I thought that using the d3 library for plotting might be a better choice, considering Synnada's needs. Because even though using the d3 library might require more effort to implement new features, it can offer us a highly customizable structure.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "57abd",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "1) ",
        },
        {
          type: "text",
          text: "You can use the button to change the data on the chart.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "ed7aa",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "2) ",
        },
        {
          type: "text",
          text: "You can point your cursor over the data nodes on the chart to see values.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "42201",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "3) ",
        },
        {
          type: "text",
          text: "You can click the legend items to hide/show the data lines.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "112bd",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "4) ",
        },
        {
          type: "text",
          text: "I tried to add a basic version of the annotation ability.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "3553c",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "4.1) ",
        },
        {
          type: "text",
          text: "You can use the button to hide/show this primitive annotation.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "cd242",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "4.2) ",
        },
        {
          type: "text",
          text: "You can drag-and-drop the annotation",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "a5a6d",
      },
    },
    {
      type: "connectedLineBlock",
      attrs: {
        block_id: "58256",
        showAnnotations: "",
      },
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "d0440",
      },
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "f76b1",
      },
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "5af4b",
      },
      content: [
        {
          type: "text",
          text: "Image Block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "fb690",
      },
      content: [
        {
          type: "text",
          text: "I built an image block that takes an URL and renders it as a PNG.",
        },
      ],
    },
    {
      type: "imageBlock",
      attrs: {
        block_id: "f6c39",
        src: "/sample.png",
        alt: "image",
        title: null,
      },
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "fd2e1",
      },
    },
    {
      type: "heading2Block",
      attrs: {
        block_id: "3477a",
      },
      content: [
        {
          type: "text",
          text: "Query Block",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "6abda",
      },
      content: [
        {
          type: "text",
          text: "I have added the Query Block even though it is not completed. The block supports writing SQL and uses Prisma to run queries in the SQLite database.",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "5b432",
      },
      content: [
        {
          type: "text",
          text: "There are several issues to be handled. Those are:",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "8cb69",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "1) ",
        },
        {
          type: "text",
          text: "SQL Injections: current development method is highly susceptible to SQL Injections",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "3adfa",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "2) ",
        },
        {
          type: "text",
          text: "Table view: current table is a mess... later on I plan to come up with a better table to show results in",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "c4775",
      },
      content: [
        {
          type: "text",
          marks: [
            {
              type: "bold",
            },
          ],
          text: "3) ",
        },
        {
          type: "text",
          text: "Wrong query UX: there is no UX implementation that indicates that the query is wrong",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "44192",
      },
    },
    {
      type: "codeBlock",
      attrs: {
        block_id: "dac01",
        language: null,
      },
      content: [
        {
          type: "text",
          text: "SELECT * FROM CONTACT\nORDER BY firstName DESC",
        },
      ],
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "950de",
      },
    },
    {
      type: "paragraphBlock",
      attrs: {
        block_id: "bbae4",
      },
    },
  ],
};

export default example;
