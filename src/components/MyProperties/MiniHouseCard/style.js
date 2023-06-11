import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* align-items: center; */
  width: fit-content;
`;

export const Wrapper = styled.div`
  padding: 0 16px;

  white-space: nowrap;
`;

export const Price = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  text-decoration-line: line-through;
  color: #696969;
`;

export const SalePrice = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;

export const Image = styled.div`
  width: 123px;
  height: 123px;
  img {
    object-fit: cover;
  }
`;
