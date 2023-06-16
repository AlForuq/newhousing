import React from "react";
import PropertiesProvider from "./properties";
import NavbarProvider from "./navbar";
import FavouritesProvider from "./favourites";
import KeyProvider from "./key";
import FavListProvider from "./favList";

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>
        <NavbarProvider>
          <FavouritesProvider>
            <KeyProvider>
              <FavListProvider>{children}</FavListProvider>
            </KeyProvider>
          </FavouritesProvider>
        </NavbarProvider>
      </PropertiesProvider>
    </>
  );
};

export default RootContext;
