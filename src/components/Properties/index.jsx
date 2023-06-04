import React, { useEffect, useState } from "react";
import { Container, Message, Wrapper } from "./style";
import { HouseCard } from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import UseSearch from "../../hooks/useSearch";

export const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const query = UseSearch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  // const [fav, setFav] = useState([]);
  const [title, setTitle] = useState("Properties");

  useEffect(() => {
    if (!query.get("category_id")) {
      setTitle("Properties");
    }
    // eslint-disable-next-line
  }, [query.get("category_id")]);

  // const { refetch } = useQuery(
  //   [],
  //   () => {
  //     return fetch("http://localhost:8081/api/v1/houses/getAll/favouriteList", {
  //       headers: {
  //         Authorization: `Bearer ${localStorage.getItem("token")}`,
  //         "Content-Type": "application/json",
  //       },
  //     }).then((res) => res.json());
  //   },
  //   {
  //     onSuccess: (res) => {
  //       setFav(res?.data || []);
  //     },
  //     refetchOnWindowFocus: false,
  //     keepPreviousData: true,
  //   }
  // );

  useEffect(() => {
    fetch(`${url}/v1/houses/list${search}`, {})
      .then((res) => res.json())
      .then((res) => {
        setList(res?.data || []);
      })
      .catch(() => {});

    // eslint-disable-next-line
  }, [search]);

  const { isLoading, isRefetching } = useQuery(
    [query.get("category_id")],
    () =>
      query.get("category_id") &&
      fetch(`${url}/v1/categories/${query.get("category_id")}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then((res) => res.json()),
    {
      onSuccess: (res) => {
        setTitle(res?.data?.name || "Properties");
      },

      refetchOnWindowFocus: false,
      keepPreviousData: true,
    }
  );

  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };

  return (
    <Container>
      <div className="title center">
        {isLoading || isRefetching ? "Loading..." : title}
      </div>
      <div className="description center">
        The Houses that You Want and dream!!!
      </div>

      <Wrapper>
        {list ? (
          list?.map((value) => {
            return (
              <HouseCard
                onClick={() => onSelect(value.id)}
                key={value.id}
                info={value}
              />
            );
            // return fav?.map((favItems) => {
            //   if (value.id === favItems.id) {
            //     return (
            //       <HouseCard
            //         favourite={favItems.favorite}
            //         onClick={() => onSelect(value.id)}
            //         key={value.id}
            //         info={value}
            //       />
            //     );
            //   } else {
            //     return (
            //       <HouseCard
            //         onClick={() => onSelect(value.id)}
            //         key={value.id}
            //         info={value}
            //       />
            //     );
            //   }
            // });
          })
        ) : (
          <Message>No Data Found</Message>
        )}
      </Wrapper>
    </Container>
  );
};
