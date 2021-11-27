import React, { useState, useContext, useEffect } from "react";
import { AppContext } from "../Context/ContextProvider";
import ilustraHeader from "../imgs/svg/ilustra_header.svg";
import searchIcon from "../imgs/svg/icon-search-mod-noc.svg";
import searchIconAuto from "../imgs/svg/icon-search.svg";

export default function GiphySearchBar() {
  const { setGifCategories, setIsSearchSend } = useContext(AppContext);
  const [inputValue, setInputValue] = useState("");
  const [suggestionList, setSuggestionList] = useState([]);

  console.log(suggestionList);

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
    let key = "gXsfPNJlsOfkekKEAerHBmwthwr5XXXJ";
    let petision = fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=${key}&q=${inputValue}&limit=5&offset=0&rating=g&lang=en`
    );
    petision
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setSuggestionList(data.data);
      });
  }, [inputValue]);

  return (
    <div>
      <div className="header-title-container">
        <p className="header-text-start">¡Inspirate y busca los mejores</p>
        <p className="header-text-end">&nbsp;GIFS!</p>
      </div>
      <img src={ilustraHeader} className="header-img" alt="Imagen Header" />
      <form onSubmit={handleSubmit} className="form-container">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button className="search-icon-container">
          <img src={searchIcon} className="search-svg" alt="Search Icon" />
        </button>
        <div className="p-absolute">
          {suggestionList.map((suggestion) => (
            <div className="p-relative">
              <img src={searchIconAuto} className="search-icon-auto" alt="" />
              <li className="li-autocomplete">{suggestion.name}</li>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
