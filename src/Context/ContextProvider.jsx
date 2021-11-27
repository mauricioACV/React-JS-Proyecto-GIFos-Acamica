import React, { useState } from "react";

export const AppContext = React.createContext();

export default function ContextProvider({ children }) {
  const [gifCategory, setGifCategories] = useState("");
  const [isSearchSend, setIsSearchSend] = useState(false);

  return (
    <AppContext.Provider
      value={{ gifCategory, setGifCategories, isSearchSend, setIsSearchSend }}
    >
      {children}
    </AppContext.Provider>
  );
}
