import React from "react";
import { Container } from "./style";
import Carousel from "../Carousel";
import { HouseCard } from "../HouseCard";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <div className="center" >
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </Container>
  );
};
