import React, { useState, useEffect } from "react";
import SlashMenuItem from "./SlashMenuItem";
import menuSuggestions from "./menuSuggestions";

const SlashMenu = () => {
  const initialQuery = "";
  const initialSuggestions = menuSuggestions.items({ query: "" });

  const [query, setQuery] = useState(initialQuery);
  const [suggestions, setSuggestion] = useState(initialSuggestions);

  useEffect(() => {
    setSuggestion(menuSuggestions.items({ query: query }));
  }, [query]);

  let handleInput = (e) => {
    setQuery(e.target.value.toLowerCase());
  };
  return (
    <div className="h-64">
      <div className="h-64 overflow-y-scroll flex flex-col items-center justify-start bg-white border border-black p-4">
        <input
          className="border border-black outline-none"
          type="text"
          value={query}
          onChange={handleInput}
        />
        {suggestions.length > 0 ? (
          suggestions.map((item, index) => (
            <SlashMenuItem key={item.title} suggestion={item} />
          ))
        ) : (
          <div>No result</div>
        )}
      </div>
    </div>
  );
};

export default SlashMenu;
