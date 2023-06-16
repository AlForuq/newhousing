import React, { createContext, useContext, useState } from "react";
import { useQuery } from "react-query";
import { FavouritesContext } from "../favourites";

export const FavListContext = createContext();

const FavListProvider = ({ children }) => {
  const [favList, setFavList] = useState([]);
  const [refetcher, setRefetch] = useContext(FavouritesContext);

  const { refetch } = useQuery(
    [],
    () =>
      fetch("http://localhost:8081/api/v1/houses/getAll/favouriteList", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        setRefetch({ ...refetcher, fav2: refetch });
        setFavList(res?.data);
      },
    }
  );
  return (
    <FavListContext.Provider value={[favList, setFavList]}>
      {children}
    </FavListContext.Provider>
  );
};

export default FavListProvider;
