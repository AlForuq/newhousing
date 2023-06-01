import React from "react";
import { Container, Title, Wrapper, Info, WrapperChild } from "./style";

export const PropertyDetails = ({ data }) => {
  return (
    <Container>
      <div className="subTitle">Property Details</div>
      <Wrapper>
        <WrapperChild>
          <span>
            <Title>Property ID:</Title> <Info>{data?.id || "HZ27"}</Info>
          </span>
          <span>
            <Title>Price:</Title> <Info>${data?.price || "130.000"}</Info>
          </span>
          <span>
            <Title>Property Size:</Title>{" "}
            <Info>{data?.houseDetails?.area || 960} Sq Ft</Info>
          </span>
          <span>
            <Title>Year Built: </Title>{" "}
            <Info>{data?.houseDetails?.yearBuilt || 1342}</Info>
          </span>
        </WrapperChild>

        <WrapperChild>
          <span>
            <Title>Bedrooms:</Title>{" "}
            <Info>{data?.houseDetails?.beds || "1+"}</Info>
          </span>
          <span>
            <Title>Bathrooms:</Title>{" "}
            <Info>{data?.houseDetails?.bath || "1+"}</Info>
          </span>
          <span>
            <Title>Rooms:</Title>{" "}
            <Info>{data?.houseDetails?.room || "1+"}</Info>
          </span>
          <span>
            <Title>Garage:</Title>{" "}
            <Info>{data?.houseDetails?.garage || "1+"}</Info>
          </span>
        </WrapperChild>
        <WrapperChild>
          <span>
            <Title>Property Type:</Title>{" "}
            <Info>{data?.category?.name || "HZ27"}</Info>
          </span>
          <span>
            <Title>Property Status:</Title> <Info>For Rent or Sale</Info>
          </span>
        </WrapperChild>
      </Wrapper>
    </Container>
  );
};
