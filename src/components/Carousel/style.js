import styled from "styled-components";
import { Carousel } from "antd";
import { ReactComponent as Arrow } from "../../assets/icons/left-arrow.svg";

export const Container = styled.div`
  position: relative;

  /* .icon:hover {
    opacity: 0.7;
  } */
`;

export const CarouselAntd = styled(Carousel)``;

export const Icon = styled(Arrow)`
  position: absolute;
  top: 50%;
  left: ${({ left }) => left && "0px"};
  right: ${({ left }) => !left && "0px"};
  transform: ${({ left }) =>
    left ? "translate(100%, -50%)" : "translate(-100%, -50%) rotate(180deg)"};
  width: 45px;
  height: 45px;
  padding: 12px;
  border-radius: 50%;
  z-index: 999;
  cursor: pointer;

  background: white;
  & path {
    fill: #0d263b;
  }
  opacity: 0.4;
  &:hover {
    opacity: 0.7;
  }
`;
