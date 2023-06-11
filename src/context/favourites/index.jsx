import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [refetcher, setRefetch] = useState({ fav: null, pro: null });
  return (
    <FavouritesContext.Provider value={[refetcher, setRefetch]}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
