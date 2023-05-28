import React, { useEffect, useState } from "react";
import { Container } from "./style";
import { HouseCard } from "../HouseCard";
import { useLocation } from "react-router-dom";

export const Properties = () => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [list, setList] = useState();
  const { search } = useLocation();

  useEffect(() => {
    fetch(`${url}/v1/houses/list${search}`, {})
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setList(res?.data);
      });

    // eslint-disable-next-line
  }, [search]);

  return (
    <Container>
      {list?.map((item) => {
        return <HouseCard info={item} />;
      })}
    </Container>
  );
};
