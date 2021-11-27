import React from "react";

export default function GifGridItem({ url, title }) {
  return (
    <div className="card-gif animate__animated animate__fadeIn">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img className="gif-Img" src={url} alt={title} />
      </a>
    </div>
  );
}
