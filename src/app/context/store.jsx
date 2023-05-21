"use client";

import { useContext, createContext, useState } from "react";

const GlobalContext = createContext({
  menu: "",
  setMenu: "",
});

export const GlobalContextProvider = ({ children }) => {
  const [menu, setMenu] = useState("");

  return (
    <GlobalContext.Provider value={{ menu, setMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
