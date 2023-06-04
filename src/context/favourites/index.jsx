import React, { createContext, useState } from "react";

export const FavouritesContext = createContext();

const FavouritesProvider = ({ children }) => {
  const [refetch, setRefetch] = useState();
  return (
    <FavouritesContext.Provider value={[refetch, setRefetch]}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesProvider;
