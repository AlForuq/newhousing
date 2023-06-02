import React from "react";
import PropertiesProvider from "./properties";
import NavbarProvider from "./navbar";

const RootContext = ({ children }) => {
  return (
    <>
      <PropertiesProvider>
        <NavbarProvider>{children}</NavbarProvider>
      </PropertiesProvider>
    </>
  );
};

export default RootContext;
