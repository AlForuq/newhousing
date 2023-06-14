import React from "react";
import { AntCheck, Container } from "./style";

const Checkbox = ({
  children,
  // ml,
  // mr,
  // mt,
  // mb,
  onChange,
  small,
  value,
  name,
  checked,
}) => {
  return (
    <Container>
      <AntCheck
        // mr={mr}
        // ml={ml}
        // mb={mb}
        // mt={mt}
        checked={checked}
        name={name}
        size={small}
        value={value}
        onChange={onChange}
      >
        {children}
      </AntCheck>
    </Container>
  );
};

export default Checkbox;
