import React, { forwardRef } from "react";
import { Container, Wrapper, Icon } from "./style";

export const Input = forwardRef(
  (
    {
      mr,
      ml,
      mb,
      mt,
      border,
      pl,
      placeholder,
      onChange,
      width,
      height,
      value,
      name,
      type,
      children,
    },
    ref
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>{children}</Icon>
        <Container
          border={border}
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
