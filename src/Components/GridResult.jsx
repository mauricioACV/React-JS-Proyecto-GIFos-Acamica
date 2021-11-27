import React, { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";
import { useFetchGifs } from "../Hooks/useFetchGif";
import GifGridItem from "./GifGridItem";
import NotFoundResult from "./NotFoundResult";
import Spinner from "./common/Spinner";

export default function GridResult() {
  const { isSearchSend, gifCategory, cssTextMode } = useContext(AppContext);
  const { data: images, loading } = useFetchGifs(gifCategory);
  return (
    <div className={`mode-${cssTextMode}`}>
      <h2 className={`gridResult-title mode-${cssTextMode}`}>
        {!loading && isSearchSend
          ? images.length > 0 && !loading
            ? "Resultados de la búsqueda"
            : ""
          : "También puedes revisar los gifs en tendencia"}
      </h2>
      {loading && <Spinner />}
      <div className={`grid-container b-radius5 mode-${cssTextMode}`}>
        {images.length > 0 ? (
          images.map((img) => <GifGridItem key={img.id} {...img} />)
        ) : isSearchSend && !loading ? (
          <NotFoundResult />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
