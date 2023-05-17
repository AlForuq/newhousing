import { Children } from "react";
import styled from "styled-components";
const getType = ({ type }) => {
  switch (type) {
    case "dark":
      return {
        background: "transparent",
        border: "1px solid #fff",
        color: "#fff",
      };

    case "light":
      return {
        background: "#fff",
        border: "1px solid #e6e9ec",
        color: "#0D263B",
      };
    default:
      return {
        background: "#0061df",
        border: "none",
        color: "#fff",
      };
  }
};

const Container = styled.input`
  border-radius: 2px;
  font-size: 16px;
  border: 1px solid #e6e9ec;
  outline: none;
  padding-left: ${({ pl }) => pl || "20px"};
  height: ${({ height }) => (height ? height + "px" : "44px")};
  width: ${({ width }) => (width ? width + "px" : "100%")};
  /* ${getType}; */
`;

const Wrapper = styled.div`
  position: relative;
  /* display: flex;
  align-items: center; */
  width: 100%;
`;

const Icon = styled.div`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-40%);
`;

export { Container, Wrapper, Icon };
