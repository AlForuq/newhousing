import React, { useEffect } from "react";
import { MyFavourites } from "../../components/MyFavourites";

export const MyFavouritesPage = () => {
   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  return <MyFavourites />;
};
