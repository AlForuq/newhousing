import React, { useEffect, useState } from "react";
import { Container, Message, Wrapper } from "./style";
import { HouseCard } from "../HouseCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import UseSearch from "../../hooks/useSearch";

export const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [list, setList] = useState();
  const [title, setTitle] = useState("Properties");
  const { search } = useLocation();
  const query = UseSearch();

  const navigate = useNavigate();

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
        console.log(res);
        setList(res?.data);
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
        {list || list?.length || list !== null ? (
          list?.map((item) => {
            return (
              <HouseCard
                onClick={() => onSelect(item.id)}
                key={item.id}
                info={item}
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
