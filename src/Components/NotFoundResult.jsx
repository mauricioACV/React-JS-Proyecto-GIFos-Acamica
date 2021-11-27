import React from "react";
import error from "../imgs/png/error.png";

export default function NotFoundResult() {
  return (
    <div className="height-100">
      <h2>
        Lo sentimos no encontramos resultados, intenta con otra categoria...
      </h2>
      <img src={error} className="not-found-img" alt="not found" />
    </div>
  );
}
