import React, { useEffect, useState } from "react";

export const AppContext = React.createContext();

export default function ContextProvider({ children }) {
  const [gifCategory, setGifCategories] = useState("");
  const [isSearchSend, setIsSearchSend] = useState(false);
  const [modeDark, setModeDark] = useState(false);
  const [cssTextMode, setCssTextMode] = useState("light");

  useEffect(() => {
    const cssText = modeDark ? "dark" : "light";
    setCssTextMode(cssText);
  }, [modeDark]);

  return (
    <AppContext.Provider
      value={{
        gifCategory,
        setGifCategories,
        isSearchSend,
        setIsSearchSend,
        modeDark,
        setModeDark,
        cssTextMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
