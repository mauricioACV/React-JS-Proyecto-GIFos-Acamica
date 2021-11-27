import React, { useContext } from "react";
import { AppContext } from "./Context/ContextProvider";
import GiphySearchBar from "./Components/GiphySearchBar";
import GridResult from "./Components/GridResult";
import Header from "./Components/Header";
import "./styles.css";

export default function App() {
  const { cssTextMode } = useContext(AppContext);

  return (
    <div className={`App mode-${cssTextMode}`}>
      <div className={`component-container mode-${cssTextMode}`}>
        <Header />
        <GiphySearchBar />
        <GridResult />
      </div>
    </div>
  );
}
