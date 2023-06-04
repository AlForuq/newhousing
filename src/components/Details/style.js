import styled from "styled-components";

import { ReactComponent as bed } from "../../assets/icons/beds.svg";
import { ReactComponent as bath } from "../../assets/icons/bath.svg";
import { ReactComponent as garage } from "../../assets/icons/car.svg";
import { ReactComponent as ruler } from "../../assets/icons/ruler.svg";
import { ReactComponent as love } from "../../assets/icons/love.svg";
import { ReactComponent as Share } from "../../assets/icons/Share.svg";
import { ReactComponent as calendar } from "../../assets/icons/calendar.svg";

export const Container = styled.div`
  max-width: var(--width);
  width: 100%;
  padding: 34px 130px;
  margin: auto;
`;

export const Grid = styled.div`
  display: grid;
  gap: 20px;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* grid-template-rows: auto auto auto 1fr; */
  img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }

  .item1 {
    grid-column: 1 / 3;
    grid-row: 1/3;
  }

  .item2 {
    grid-column: 3/4;
    grid-row: 1 / 2;
  }

  .item3 {
    grid-column: 4/5;
    grid-row: 1 / 2;
  }
  .item4 {
    grid-column: 3/4;
    grid-row: 2 / 3;
  }

  .item5 {
    grid-column: 4 / 5;
    grid-row: 2/3;
  }

  .grid-item {
    /* border: 1px solid black; */
    box-sizing: border-box;
  }

  .grid1 {
    grid-column: 1/3;
    grid-row: 3/4;
  }

  .grid2 {
    grid-column: 3/4;
    grid-row: 3/4;
  }

  .grid3 {
    grid-column: 1/3;
    grid-row: 4/5;
  }

  .grid4 {
    grid-column: 3/4;
    grid-row: 4/5;
  }

  .grid5 {
    grid-column: 1/4;
    grid-row: 5/6;
  }

  .grid6 {
    grid-column: 4/5;
    grid-row: 3 / span 6;
  }
`;

export const InfoWrapper = styled.div``;

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
  height: 100%;
  justify-content: space-between;
  align-items: center;
  /* padding-top: 15px; */
`;

export const Icon = styled.div``;

Icon.Wrapper = styled.div`
  display: flex;
  gap: 8px;
  /* flex-direction: column; */
  align-items: center;
`;
export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  border-top: 1px solid #e6e9ec;
  /* padding: 10px 25px; */
`;

Price.Wrapper = styled("div")`
  display: flex;
  gap: 4px;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
`;

export const IconWrapper = styled("div")`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 26px;

  .social {
    display: flex;
    gap: 8px;
    align-items: center;

    cursor: pointer;
  }

  .social:active {
    :first-child {
      transform: scale(0.95);
    }
  }
`;

Price.Origin = styled(Info.Text)`
  line-height: 1.5;
  font-weight: 200;
  text-decoration: line-through;
`;

Price.Sale = styled(Info.Title)`
  font-size: 24px;
  line-height: 32px;
`;

Icon.Bed = styled(bed)``;
Icon.Bath = styled(bath)``;
Icon.Garage = styled(garage)``;
Icon.Ruler = styled(ruler)``;
Icon.Calendar = styled(calendar)``;
Icon.Share = styled(Share)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f6f8f9;
  padding: 7px;
`;

Icon.Love = styled(love)`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: #f6f8f9;
  padding: 7px;
  & path {
    fill: red;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border: 1px solid #e6e9ec;
  border-radius: 3px;
`;

export const User = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

User.Wrapper = styled.div`
  width: 52px;
  height: 52px;
  /* border-radius: 50%; */
`;

User.Contact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

User.Name = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;

User.Phone = styled.a`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  color: #696969;
`;

export const TextArea = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  border-bottom: 1px solid #0d263b;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  text-align: left;
  overflow: hidden;
  resize: none;
`;

export const AgreeMent = styled.div`
  display: flex;
  gap: 8px;
`;

AgreeMent.Text = styled.div`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0em;
  color: #696969;
  text-align: left;
`;
