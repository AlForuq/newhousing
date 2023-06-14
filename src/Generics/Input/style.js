import styled from "styled-components";

const fixBorder = (border) => {
  switch (border) {
    case "open":
      return {
        borderTop: "none",
        borderLeft: "none",
        borderRight: "none",
        background: "#fff",
        borderBottom: "1px solid #e6e9ec",
        outline: "none",
      };
    default:
      return {
        border: "1px solid #e6e9ec",
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

  ${({ border }) => fixBorder(border)};
  &:focus {
    border-bottom: ${({ border }) => border === "open" && "2px solid #0061DF"};
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;

  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
`;

const Icon = styled.div`
  transition: 1s !important;
  position: absolute;
  /* left: ${({ children }) =>
    typeof children === "string" ? "20px" : " 10px"}; */
  left: 10px;
  /* top: 50%; */
  bottom: ${({ children }) => (typeof children === "string" ? "80%" : "3%")};
  transform: translateY(-40%);
  color: #696969;
`;

export { Container, Wrapper, Icon };
