import styled from "styled-components";

import { ReactComponent as airconditioner } from "../../../assets/features/air-conditioner.svg";
import { ReactComponent as barbecue } from "../../../assets/features/barbecue.svg";
import { ReactComponent as dryer } from "../../../assets/features/dryer.svg";
import { ReactComponent as dumbbell } from "../../../assets/features/dumbbell.svg";

import { ReactComponent as grass } from "../../../assets/features/grass.svg";
import { ReactComponent as laundry } from "../../../assets/features/laundry.svg";
import { ReactComponent as microwave } from "../../../assets/features/microwave.svg";
import { ReactComponent as outdoorshower } from "../../../assets/features/outdoor-shower.svg";

import { ReactComponent as refrigerator } from "../../../assets/features/refrigerator.svg";
import { ReactComponent as sauna } from "../../../assets/features/sauna.svg";
import { ReactComponent as swimmer } from "../../../assets/features/swimmer.svg";
import { ReactComponent as coaxial } from "../../../assets/features/coaxial.svg";
import { ReactComponent as liquidsoap } from "../../../assets/features/liquid-soap.svg";
import { ReactComponent as wifi } from "../../../assets/features/wifi.svg";
import { ReactComponent as blinds } from "../../../assets/features/blinds.svg";
import { ReactComponent as chair } from "../../../assets/features/chair.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-top: 1px solid #e6e9ec;
  padding: 48px 0;
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const WrapperChild = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  flex: 1;

  span {
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const Info = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #696969;
`;

export const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AirConditioner = styled(airconditioner)``;
const Barbecue = styled(barbecue)``;
const Dryer = styled(dryer)``;
const Dumbbell = styled(dumbbell)``;

const Grass = styled(grass)``;
const Laundry = styled(laundry)``;
const Microwave = styled(microwave)``;
const Outdoorshower = styled(outdoorshower)``;

const Refrigerator = styled(refrigerator)``;
const Sauna = styled(sauna)``;
const Swimmer = styled(swimmer)``;
const Coaxial = styled(coaxial)``;
const Liquidsoap = styled(liquidsoap)``;
const Wifi = styled(wifi)``;
const Blinds = styled(blinds)``;
const Chair = styled(chair)``;

export {
  AirConditioner,
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
};
