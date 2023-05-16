import React from "react";
import { Container } from "./style";

const Button = ({ width, height, type, children, onClick }) => {
  return (
    <Container onClick={onClick} width={width} height={height} type={type}>
      {children}
    </Container>
  );
};

export default Button;
