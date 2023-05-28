import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import { Categories } from "../Category";
import { Recomandation } from "./Recomandation";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recomandation />
      <Categories />
    </Container>
  );
};
