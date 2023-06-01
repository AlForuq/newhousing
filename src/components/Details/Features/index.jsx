import React from "react";
import {
  Container,
  Wrapper,
  Info,
  WrapperChild,
  AirConditioner,
  IconWrapper,
  Barbecue,
  Dryer,
  Dumbbell,
  Grass,
  Laundry,
  Microwave,
  Outdoorshower,
  Refrigerator,
  Sauna,
  Swimmer,
  Coaxial,
  Liquidsoap,
  Wifi,
  Blinds,
  Chair,
} from "./style";

export const Features = ({ data }) => {
  return (
    <Container>
      <div className="subTitle">Features</div>
      <Wrapper>
        <WrapperChild>
          <span>
            <IconWrapper>
              <AirConditioner />
            </IconWrapper>
            <Info>Air Conditioning</Info>
          </span>
          <span>
            <IconWrapper>
              <Barbecue />
            </IconWrapper>
            <Info>Barbecue</Info>
          </span>
          <span>
            <IconWrapper>
              <Dryer />
            </IconWrapper>
            <Info>
              <Dryer></Dryer>
            </Info>
          </span>
          <span>
            <IconWrapper>
              <Dumbbell />
            </IconWrapper>
            <Info>Gym</Info>
          </span>
        </WrapperChild>

        <WrapperChild>
          <span>
            <IconWrapper>
              <Grass />
            </IconWrapper>
            <Info>Lawn</Info>
          </span>
          <span>
            <IconWrapper>
              <Laundry />
            </IconWrapper>
            <Info>Laundry</Info>
          </span>
          <span>
            <IconWrapper>
              <Microwave />
            </IconWrapper>
            <Info>Microwave</Info>
          </span>
          <span>
            <IconWrapper>
              <Outdoorshower />
            </IconWrapper>
            <Info>Outdoor shower</Info>
          </span>
        </WrapperChild>
        <WrapperChild>
          <span>
            <IconWrapper>
              <Refrigerator />
            </IconWrapper>
            <Info>Refrigerator</Info>
          </span>
          <span>
            <IconWrapper>
              <Sauna />
            </IconWrapper>
            <Info>Sauna</Info>
          </span>
          <span>
            <IconWrapper>
              <Swimmer />
            </IconWrapper>
            <Info>Swimming Pool</Info>
          </span>
          <span>
            <IconWrapper>
              <Coaxial />
            </IconWrapper>
            <Info>TV Cable</Info>
          </span>
        </WrapperChild>
        <WrapperChild>
          <span>
            <IconWrapper>
              <Liquidsoap />
            </IconWrapper>
            <Info>Washer</Info>
          </span>
          <span>
            <IconWrapper>
              <Wifi />
            </IconWrapper>
            <Info>WiFi</Info>
          </span>
          <span>
            <IconWrapper>
              <Blinds />
            </IconWrapper>
            <Info>Window Coverings</Info>
          </span>
          <span>
            <IconWrapper>
              <Chair />
            </IconWrapper>
            <Info>Dining Room</Info>
          </span>
        </WrapperChild>
      </Wrapper>
    </Container>
  );
};
