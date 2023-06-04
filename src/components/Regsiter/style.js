import styled from "styled-components";

export const Container = styled.div`
  max-width: var(--width);
  width: 100%;
  padding: 64px 130px;
  margin: auto;
`;

export const Box = styled.div`
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px 48px;
  margin: auto;
  max-width: 580px;
  width: 100%;

  .div {
    display: flex;
    justify-content: space-between;
    margin-top: 17px;
  }

  .forgot {
    text-decoration: underline;
    color: #0061df;
    
  }
`;
