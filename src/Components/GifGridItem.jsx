import React from "react";

export default function GifGridItem({url, title}) {
  return (
    <div className="card-gif animate__animated animate__fadeIn">
      <img className="gif-Img" src={url} alt={title} />
    </div>
  );
}
