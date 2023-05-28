import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--width);
  width: 100%;
  margin: auto;

  /* display: flex;
  justify-content: space-around; */
  /* flex-wrap: wrap; */
  /* white-space: wrap; */
  /* align-items: center; */

  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 10px;
  padding: var(--padding);
`;
