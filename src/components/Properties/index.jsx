import React, { useContext, useEffect, useState } from "react";
import { Container, Message, Wrapper } from "./style";
import { HouseCard } from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import UseSearch from "../../hooks/useSearch";
import { FavListContext } from "../../context/favList";

export const Properties = () => {
  const [favList] = useContext(FavListContext);

  const { REACT_APP_BASE_URL: url } = process.env;
  const query = UseSearch();
  const { search } = useLocation();
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const [title, setTitle] = useState("Properties");

  useEffect(() => {
    if (!query.get("category_id")) {
      setTitle("Properties");
    }
    // eslint-disable-next-line
  }, [query.get("category_id")]);

  useEffect(() => {
    fetch(`${url}/v1/houses/list${search}`, {})
      .then((res) => res.json())
      .then((res) => {
        const arr3 = res?.data?.map((obj2) => {
          const matchingObj = favList?.find((obj1) => obj1.id === obj2.id);
          return matchingObj
            ? { ...obj2, favorite: matchingObj.favorite }
            : { ...obj2, favorite: false };
        });
        setList(arr3.sort((a, b) => b.id - a.id));
      })

      .catch(() => {});

    // eslint-disable-next-line
  }, [search, favList.length]);

  // console.log(favList, "fav");
  // console.log(list, "list");
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
        The Houses that You Want and Dream!!!
      </div>

      <Wrapper>
        {list && list.length ? (
          list?.map((value) => {
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
          <Message>No Data Found</Message>
        )}
      </Wrapper>
    </Container>
  );
};
