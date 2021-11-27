import React, { useState, useContext, useEffect } from "react";
import AutocompleteCategory from "./AutocompleteCategory";
import { AppContext } from "../Context/ContextProvider";
import { getGifBySuggestion } from "../Helpers/getGifBySuggestion";
import ilustraHeader from "../imgs/svg/ilustra_header.svg";
import searchIcon from "../imgs/svg/icon-search-mod-noc.svg";

export default function GiphySearchBar() {
  const { setGifCategories, setIsSearchSend, cssTextMode } = useContext(
    AppContext
  );

  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setIsSearchSend(true);
      setGifCategories(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    getGifBySuggestion(inputValue, setSuggestionList);
  }, [inputValue]);

  return (
    <div className={`mode-${cssTextMode}`}>
      <div className="header-title-container">
        <p className={`header-text-start mode-${cssTextMode}`}>
          ¡Inspirate y busca los mejores
        </p>
        <p className={`header-text-end mode-${cssTextMode}`}>&nbsp;GIFS!</p>
      </div>
      <img src={ilustraHeader} className="header-img" alt="Imagen Header" />
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          className={`input-format input-${cssTextMode}`}
          value={inputValue}
          onChange={handleInputChange}
          placeholder="busca aquí tus gifs favoritos"
        />
        <button className={`search-icon-container-${cssTextMode}`}>
          <img src={searchIcon} className="search-svg" alt="Search Icon" />
        </button>
        <AutocompleteCategory
          setInputValue={setInputValue}
          suggestionList={suggestionList}
        />
      </form>
    </div>
  );
}
