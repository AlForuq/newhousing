import React, { useContext } from "react";
import apart from "../../assets/images/apartment1.jpg";
import user from "../../assets/images/avatar1.png";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Icon,
  Image,
  Info,
  InfoWrapper,
  User,
  Price,
} from "./style";
import { FavouritesContext } from "../../context/favourites";
import { message } from "antd";

export const HouseCard = ({ favourite, info, mr, ml, margin, onClick }) => {
  const navigate = useNavigate();

  const [refetcher] = useContext(FavouritesContext);
  const onFavorite = () => {
    fetch(
      `http://localhost:8081/api/v1/houses/addFavourite/${
        info.id
      }?favourite=${!favourite}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        if (res?.success) {
          refetcher?.fav();

          if (favourite) message.warning("Successfully disliked");
          else message.info("Successfully liked");
        }
      })
      .catch(() => {});
  };

  const onFav = (e) => {
    navigate("/profile/properties/favourites");
  };

  return (
    <Container mr={mr} ml={ml} margin={margin}>
      <Image
        onClick={onClick}
        src={(info?.attachments && info?.attachments[0]?.imgPath) || apart}
      />

      <InfoWrapper>
        <User>
          <User.Img src={user} />
        </User>

        <Info.Title>
          {info?.name || "Name of Property"}, Category: {info?.category?.name}{" "}
        </Info.Title>

        <Info.Text>
          {info?.address || "Address"}, {info?.region || "Region"},{" "}
          {info?.city || "City"}, {info?.country || "Country"}
        </Info.Text>

        <Info.Details>
          <Icon.Wrapper>
            <Icon.Bed />
            <Info.Text>{info?.houseDetails?.beds || 0} Beds </Info.Text>
          </Icon.Wrapper>

          <Icon.Wrapper>
            <Icon.Bath />
            <Info.Text>{info?.houseDetails?.bath || 0} Baths </Info.Text>
          </Icon.Wrapper>

          <Icon.Wrapper>
            <Icon.Garage />
            <Info.Text>{info?.houseDetails?.garage || 0} Garage </Info.Text>
          </Icon.Wrapper>

          <Icon.Wrapper>
            <Icon.Ruler />
            <Info.Text>{info?.houseDetails?.area || 0} Sq Ft </Info.Text>
          </Icon.Wrapper>
        </Info.Details>
      </InfoWrapper>

      <Price>
        <Price.Wrapper>
          <Price.Origin>${info?.salePrice || 0} / month</Price.Origin>
          <Price.Sale>${info?.price || 0} / month</Price.Sale>
        </Price.Wrapper>

        <Price.IconWrapper>
          <Icon.Resize onClick={onFav} />
          <Icon.Love onClick={onFavorite} favourite={favourite} />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};
