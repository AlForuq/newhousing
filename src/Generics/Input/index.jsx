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
      min,
      max,
      required,
    },
    ref
  ) => {
    return (
      <Wrapper mr={mr} ml={ml} mb={mb} mt={mt}>
        <Icon>
          {children ? children : (value || value === 0) && placeholder}
        </Icon>
        <Container
          required={required}
          min={min}
          max={max}
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
