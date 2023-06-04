import React from "react";
import PropertiesProvider from "./properties";
import NavbarProvider from "./navbar";
import FavouritesProvider from "./favourites";

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>
        <NavbarProvider>
          <FavouritesProvider>{children}</FavouritesProvider>
        </NavbarProvider>
      </PropertiesProvider>
    </>
  );
};

export default RootContext;
