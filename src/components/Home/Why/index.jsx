import React from "react";
import { Box, Container, Wrapper } from "./style";
import { data } from "./data";

export const Why = () => {
  return (
    <Container>
      <div className="title center">Why Choose Us?</div>
      <div className="description center">Here is some reasons we have</div>
      <Wrapper>
        {data.map((value) => {
          return (
            <Box key={value.title}>
              <img src={value.img} alt="" />
              <div className="subTitle">{value.title}</div>
              <div className="description">{value.description}</div>
            </Box>
          );
        })}
      </Wrapper>
    </Container>
  );
};
