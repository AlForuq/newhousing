import React, { useContext, useState } from "react";
import { Container, Message, Wrapper } from "./style";
import { HouseCard } from "../HouseCard";
import { useQuery } from "react-query";
import { FavouritesContext } from "../../context/favourites";
import { KeyContext } from "../../context/key";
import { useNavigate } from "react-router-dom";

export const MyFavourites = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [fav, setFav] = useState([]);
  const navigate = useNavigate();
  const [refetcher, setRefetch] = useContext(FavouritesContext);

  const [key] = useContext(KeyContext);
  // console.log(key, "inFav");
  const favQuery = useQuery(
    ["myFavorites"],
    () => {
      return (
        key === "2" &&
        fetch(`${url}/v1/houses/getAll/favouriteList`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }).then((res) => res.json())
      );
    },
    {
      onSuccess: (resFav) => {
        if (resFav.success) {
          // console.log(resFav, "favs");
          setFav(resFav?.data.reverse() || []);
          setRefetch({ ...refetcher, fav: favQuery?.refetch });
        }
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      <div className="title center">My Favourites</div>
      <div className="description center">The Houses that I Like!!!</div>
      <Wrapper>
        {fav.length ? (
          fav.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                info={value}
                favourite={JSON.stringify(value?.favorite)}
              />
            );
          })
        ) : (
          <Message>No Favourites</Message>
        )}
      </Wrapper>
    </Container>
  );
};
