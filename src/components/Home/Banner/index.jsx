import React from "react";
import { Container } from "./style";
import img2 from "../../../assets/images/img2.jpg";
import Button from "../../../Generics/Button";

export const Banner = () => {
  return (
    <Container className="nocopy">
      <img height={"100%"} width={"100%"} src={img2} alt="" />
      <div className="blur title ">
        <span>
          Vermont Farmhouse With Antique Jail Is the Week's Most Popular Home
        </span>
        <Button mt={48}>Read More</Button>
      </div>
    </Container>
  );
};
