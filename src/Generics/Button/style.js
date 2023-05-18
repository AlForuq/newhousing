import styled from "styled-components";
const getType = (type) => {
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
const Container = styled.button`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 16px;
  margin-left: ${({ ml }) => (ml ? ml + "px" : "0")};
  margin-right: ${({ mr }) => (mr ? mr + "px" : "0")};
  height: ${({ height }) => (height ? height + "px" : "44px")};
  width: ${({ width }) => (width ? width + "px" : "130px")};
  min-width: ${({ width }) => (width ? width + "px" : "130px")};
  cursor: pointer;
  ${({ type }) => getType(type)};

  &:active {
    opacity: 0.7;
  }
`;

export { Container };
