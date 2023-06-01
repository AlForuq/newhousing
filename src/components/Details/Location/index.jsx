import React from "react";
import { Container, Title, Wrapper, Info } from "./style";

export const Location = ({ data }) => {
  return (
    <Container>
      <div className="subTitle">Location</div>
      <Wrapper>
        <span>
          <Title>Address: </Title>{" "}
          <Info>{data.address || "329 Queensberry Street"}</Info>
        </span>
        <span>
          <Title>City: </Title> <Info>{data.city || "Jersey City"}</Info>
        </span>
        <span>
          <Title>Region: </Title> <Info>{data.region || "Greenville"}</Info>
        </span>
      </Wrapper>
      <Wrapper>
        <span>
          <Title>State/Country:</Title>{" "}
          <Info>{data.country || "Washington"}</Info>
        </span>
        <span>
          <Title>Zip:</Title> <Info>{data.zipCode || 10097}</Info>
        </span>
        <span>
          <Title>Country:</Title> <Info>{data.country || "United States"}</Info>
        </span>
      </Wrapper>
    </Container>
  );
};
