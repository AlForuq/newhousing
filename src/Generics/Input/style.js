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
  :focus {
    background: #fff;
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
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-40%);
`;

export { Container, Wrapper, Icon };
