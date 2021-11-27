import React, { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";
import searchIcon from "../imgs/svg/icon-search-mod-noc.svg";
import searchIconAuto from "../imgs/svg/icon-search.svg";

export default function AutocompleteCategory({
  setInputValue,
  suggestionList
}) {
  const {
    setGifCategories,
    setIsSearchSend,
    modeDark,
    cssTextMode
  } = useContext(AppContext);

  const searchBySuggestion = (suggestion) => {
    setIsSearchSend(true);
    setGifCategories(suggestion);
    setInputValue("");
  };
  return (
    <div className={suggestionList.length && "p-absolute"}>
      {suggestionList.map(({ name }) => (
        <div className="p-relative" key={name}>
          <img
            src={modeDark ? searchIcon : searchIconAuto}
            className="search-icon-auto"
            alt=""
          />
          <li
            onClick={() => searchBySuggestion(name)}
            className={`li-autocomplete-${cssTextMode}`}
          >
            {name}
          </li>
        </div>
      ))}
    </div>
  );
}
