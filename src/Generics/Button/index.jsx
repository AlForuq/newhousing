import React from "react";
import { Container } from "./style";

const Button = ({ mt, mb, ml, mr, width, height, type, children, onClick }) => {
  return (
    <Container
      ml={ml}
      mr={mr}
      mt={mt}
      mb={mb}
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
