import React, { useEffect } from "react";
import { MyProperties } from "../../components/MyProperties";

export const MyPropertiesPage = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return <MyProperties />;
};
