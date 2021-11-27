import React, { useContext } from "react";
import { AppContext } from "../Context/ContextProvider";
import logo from "../imgs/svg/logo-desktop.svg";
import logoDark from "../imgs/svg/logo-mobile-modo-noct.svg";

export default function Header() {
  const { modeDark, setModeDark, cssTextMode } = useContext(AppContext);

  return (
    <div className={`mode-${cssTextMode}`}>
      <div className="header-container">
        <img
          className="logo-gifos"
          src={modeDark ? logoDark : logo}
          alt="Header Logo"
        />
        <button
          className={`btn-format btn-mode-${cssTextMode}`}
          onClick={() => setModeDark(!modeDark)}
        >
          MODO {modeDark ? "LIGHT" : "DARK"}
        </button>
      </div>
    </div>
  );
}
