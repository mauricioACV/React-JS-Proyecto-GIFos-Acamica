import React, {useContext} from "react";
import GifGridItem from "./GifGridItem";
import { AppContext } from "../Context/ContextProvider";
import { useFetchGifs } from "../Hooks/useFetchGif";
import NotFoundResult from "./NotFoundResult";

export default function GridResult({ gifCategory }) {
  const { isSearchSend } = useContext(AppContext);
  const { data: images, loading } = useFetchGifs(gifCategory);
  return (
    <>
      <h2 className="gridResult-title">Resultados de la búsqueda</h2>
      {loading && <p className="animate__animated animate__flash">Loading</p>}
      <div className="grid-container">
        {images.length > 0 ? (
          images.map((img) => <GifGridItem key={img.id} {...img} />)
        ) : (
          isSearchSend ? <NotFoundResult /> : ""
        )}
      </div>
    </>
  );
}
