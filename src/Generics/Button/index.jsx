import React from "react";
import { Container } from "./style";

const Button = ({ ml, mr, width, height, type, children, onClick }) => {
  return (
    <Container
      ml={ml}
      mr={mr}
      onClick={onClick}
      width={width}
      height={height}
      type={type}
    >
      {children}
    </Container>
  );
};

export default Button;
