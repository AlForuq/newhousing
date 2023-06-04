import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--width);
  width: 100%;
  margin: auto;
  padding: 34px 0;
  border: 1px solid black;
`;

export const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-around; */
  /* flex-wrap: wrap; */
  /* white-space: wrap; */
  /* align-items: center; */

  margin-top: 44px;

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 10px;
  padding: var(--padding);
`;

export const Message = styled.div`
  font-family: "Montserrat";
  font-size: 30px;
  font-weight: 600;

  font-style: normal;
  line-height: 36px;
  text-align: center;
  letter-spacing: 2px;
  color: #0d263b;
`;
