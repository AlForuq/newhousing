import styled from "styled-components";

export const Container = styled.form`
  max-width: 1440px;
  width: 100%;

  padding: 34px 130px;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 32px;

  button {
    margin-left: auto;
  }
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  background: #ffffff;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px 48px 30px;

  width: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 20px;

  div {
    flex: 1;
  }
`;

export const Selection = styled.select`
  flex: 1;
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
