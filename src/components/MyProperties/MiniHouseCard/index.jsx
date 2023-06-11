import React from "react";
import { Container, Image, Price, SalePrice, Wrapper } from "./style";

export const MiniHouseCard = ({
  name,
  country,
  address,
  city,
  region,
  attachments,
  salePrice,
  price,
}) => {
  return (
    <Container>
      <Image>
        <img width={"100%"} height={"100%"} src={attachments[0].imgPath} alt="" />
      </Image>
      <Wrapper>
        <div className="subTitle">{name}</div>
        <div className="description">
          {address}, {region}, {city}, {country}
        </div>
        <br />
        <Price>{price}/mo</Price>
        <SalePrice>{salePrice}/mo</SalePrice>
      </Wrapper>
    </Container>
  );
};
