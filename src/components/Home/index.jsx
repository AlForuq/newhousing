import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import { Categories } from "../Category";
import { Recomandation } from "./Recomandation";
import { Why } from "./Why";
import { Banner } from "./Banner";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recomandation />
      <Why />
      <Categories />
      <Banner />
    </Container>
  );
};
