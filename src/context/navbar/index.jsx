import React, { createContext, useState } from "react";

export const NavbarContext = createContext();

const NavbarProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  return (
    <NavbarContext.Provider value={[token, setToken]}>
      {children}
    </NavbarContext.Provider>
  );
};

export default NavbarProvider;
