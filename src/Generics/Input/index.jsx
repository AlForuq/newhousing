import React from "react";
import { Container } from "./style";

export const Input = ({
  placeholder,
  onChange,
  width,
  height,
  value,
  name,
  type,
}) => {
  return (
    <Container
      placeholder={placeholder}
      onChange={onChange}
      width={width}
      height={height}
      value={value}
      name={name}
      type={type}
    />
  );
};
