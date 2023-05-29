import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;
`;

export const Wrapper = styled("div")`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  margin-top: 32px;
  padding: 0 130px;
  /* border: 4px solid red; */
  /* background-color: black; */
`;

export const Cards = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  width: 100%;
  /* border: 4px solid blue; */
`;

export const ArrowRight = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  /* text-align: center; */
  top: 50%;
  right: 0px;
  transform: translate(-60%, -100%);
  width: 45px;
  height: 45px;
  color: white;
  background: #0d263b;
  opacity: 0.5;
  padding-left: 10px;
  box-shadow: 0px 10px 50px rgba(13, 38, 59, 0.1);
  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  :hover {
    opacity: 1;
  }
  :active {
    opacity: 0.7;
  }
`;

export const ArrowLeft = styled(ArrowRight)`
  left: 0px;
  transform: translate(60%, -100%);
  padding-left: 0;
  padding-right: 10px;
`;
