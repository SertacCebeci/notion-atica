import BlockTypes from "../BlockTypes";

const menuSuggestions = {
  items: ({ query }) => {
    return Object.values(BlockTypes).filter((element) => {
      if (query === "") {
        return true;
      }
      return element.title.toLowerCase().includes(query);
    });
  },
};

export default menuSuggestions;
