import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 8px;
  background: #f5f7fc;
  padding: 48px 130px;
  width: 100%;
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 20px;
  }

  .subTitle {
    margin: 8px;
  }

  .description {
    text-align: center;
    width: 235px;
  }
`;
