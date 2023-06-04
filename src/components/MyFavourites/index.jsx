import React, { useContext, useState } from "react";
import { Container, Message, Wrapper } from "./style";
import { HouseCard } from "../HouseCard";
import { useQuery } from "react-query";
import { FavouritesContext } from "../../context/favourites";

export const MyFavourites = () => {
  const [data, setData] = useState([]);

  const [, setRefetch] = useContext(FavouritesContext);

  const { refetch } = useQuery(
    [],
    () => {
      return fetch("http://localhost:8081/api/v1/houses/getAll/favouriteList", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }).then((res) => res.json());
    },
    {
      onSuccess: (res) => {
        setData(res?.data || []);
        setRefetch({ payload: refetch });
      },
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  return (
    <Container>
      <div className="title center">My Favourites</div>
      <div className="description center">The Houses that I Like!!!</div>
      <Wrapper>
        {data.length ? (
          data.map((value) => {
            return (
              <HouseCard
                key={value.id}
                info={value}
                favourite={`${value.favorite}`}
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
