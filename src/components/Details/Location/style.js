import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid #e6e9ec;
  padding: 48px 0;
`;

export const Wrapper = styled.div`
  display: flex;

  span {
    flex: 1;
    display: flex;
    gap: 8px;
  }
`;

export const Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
`;
export const Info = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
