import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import { AppContext } from "./Context/ContextProvider";
import GiphySearchBar from "./Components/GiphySearchBar";
import GridResult from "./Components/GridResult";
import Header from "./Components/Header";
import "./styles.css";
import "./styles-responsive.css";

export default function App() {
  const { cssTextMode, gifCategory } = useContext(AppContext);
  const title = gifCategory ? gifCategory : "HOME";
  const description = gifCategory
    ? `Resultados sobre gif de ${gifCategory}`
    : "Busca tus gif favoritos con GIFos App!";
  return (
    <>
      <Helmet>
        <title>{title} | GIFos App |</title>
        <meta
          name="description"
          content={description}
        />
      </Helmet>
      <div className={`App mode-${cssTextMode}`}>
        <div className={`component-container mode-${cssTextMode}`}>
          <Header />
          <GiphySearchBar />
          <GridResult />
        </div>
      </div>
    </>
  );
}
