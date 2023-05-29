import styled from "styled-components";

export const Container = styled.div`
  height: fit-content;
  position: relative;

  img {
    z-index: 1;
  }

  .blur {
    position: absolute;
    background-color: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    letter-spacing: 1px;

    span {
      width: 566px;
    }
  }
`;
