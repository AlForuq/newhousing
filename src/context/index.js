import React from "react";
import PropertiesProvider from "./properties";
import NavbarProvider from "./navbar";
import FavouritesProvider from "./favourites";
import KeyProvider from "./key";

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>
        <NavbarProvider>
          <FavouritesProvider>
            <KeyProvider>{children}</KeyProvider>
          </FavouritesProvider>
        </NavbarProvider>
      </PropertiesProvider>
    </>
  );
};

export default RootContext;
