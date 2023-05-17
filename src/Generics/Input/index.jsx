import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    { pl, placeholder, onChange, width, height, value, name, type, children },
    ref
  ) => {
    return (
      <Wrapper>
        <Icon>{children}</Icon>
        <Container
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          width={width}
          height={height}
          value={value}
          name={name}
          type={type}
          pl={pl}
        />
      </Wrapper>
    );
  }
);
