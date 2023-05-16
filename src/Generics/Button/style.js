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

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 16px;
  height: ${({ height }) => (height ? height + "px" : "44px")};
  width: ${({ width }) => (width ? width + "px" : "120px")};
  cursor: pointer;
  ${getType};

  :active {
    opacity: 0.7;
  }
`;

export { Container };
