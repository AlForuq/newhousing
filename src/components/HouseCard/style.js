import styled from "styled-components";

import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as resize } from "../../assets/icons/arrow-top-bottom.svg";

export const Container = styled.div`
  display: flex;
  /* overflow: hidden; */
  flex-direction: column;
  width: 100%;
  min-width: 330px !important;
  max-width: 380px;
  height: 450px;
  background: #ffffff;
  margin-bottom: 10px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
  &:hover {
    filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
      drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
  }
  img {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
`;

export const Image = styled.img`
  min-height: 220px;
  max-height: 220px;
  width: 100%;
  cursor: pointer;
  /* width: 330px; */
  /* min-width: 230px; */
`;

export const InfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 25px;
`;

export const Info = styled.div``;

Info.Title = styled.div`
  display: flex;
  font-family: "Montserrat";
  font-weight: 600;
  color: #0d263b;
  margin-bottom: 4px;
  white-space: nowrap;
  overflow: hidden;
`;

Info.Text = styled.div`
  display: flex;
  white-space: nowrap;
  overflow: hidden;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;
Info.Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 15px;
`;

export const Icon = styled.div``;

Icon.Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 45px;
  width: fit-content;
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-top: 1px solid #e6e9ec;
  padding: 10px 25px;
`;

Price.Wrapper = styled("div")`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;

  border: none;
`;

Price.IconWrapper = styled("div")`
  display: flex;
  align-items: center;
`;

Price.Origin = styled(Info.Text)`
  line-height: 1.5;
  font-weight: 200;
  text-decoration: line-through;
`;

Price.Sale = styled(Info.Title)``;

Icon.Bed = styled(bed)``;
Icon.Bath = styled(bath)``;
Icon.Garage = styled(garage)``;
Icon.Ruler = styled(ruler)``;
Icon.Resize = styled(resize)`
  cursor: pointer;
`;

Icon.Love = styled(love)`
  margin-left: 20px;
  width: 35px;
  height: 35px;
  padding: 10px;
  background: ${({ favourite }) =>
    favourite && JSON.parse(favourite) ? "red" : "#f6f8f9"};
  border-radius: 60px;
  cursor: pointer;
  &:active {
    transform: scale(0.8);
  }
  & path {
    stroke: ${({ favourite }) =>
      favourite && JSON.parse(favourite) ? "white" : "#696969"};
  }
`;

export const User = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  right: 20px;
  top: -23px;
  border-radius: 50%;
  background: orange;
  box-shadow: 0px 0px 10px rgba(13, 38, 59, 0.2);
`;

User.Img = styled.img`
  width: 43px;
  height: 43px;
  object-fit: cover;
`;
