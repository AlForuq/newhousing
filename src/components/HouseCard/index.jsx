import React, { useContext } from "react";
import apart from "../../assets/images/apartment1.jpg";
import user from "../../assets/images/avatar1.png";
import { useLocation, useNavigate } from "react-router-dom";

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
import { Tooltip, message } from "antd";
import { KeyContext } from "../../context/key";

export const HouseCard = ({ favourite, info, mr, ml, margin, onClick }) => {
  const { REACT_APP_BASE_URL: url } = process.env;
  const [, setKey] = useContext(KeyContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [refetcher] = useContext(FavouritesContext);

  const onFavorite = () => {
    fetch(
      `${url}/v1/houses/addFavourite/${info.id}?favourite=${
        favourite && !JSON.parse(favourite)
      }`,
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
        if (res?.success) {
          refetcher?.fav2 && refetcher?.fav2();
          refetcher?.fav && refetcher?.fav();

          if (favourite === "true") {
            message.warning("Successfully disliked", [1.5]);
          } else {
            message.success("Successfully liked", [1.5]);
          }
        }
      })
      .catch(() => {});
  };

  const onFav = (e) => {
    navigate("/profile");
    setKey("2");
  };

  return (
    <Container mr={mr} ml={ml} margin={margin}>
      <Tooltip zIndex={99} placement="center" title={"Detailed Page"}>
        <Image
          onClick={onClick}
          src={(info?.attachments && info?.attachments[0]?.imgPath) || apart}
        />
      </Tooltip>

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
          {location.pathname !== "/profile" ? (
            <Tooltip placement="top" title={"Favorite List"}>
              <Icon.Resize onClick={onFav} />
            </Tooltip>
          ) : (
            <Tooltip placement="top" title={"Properties"}>
              <Icon.Resize onClick={() => navigate("/properties")} />
            </Tooltip>
          )}
          <Icon.Love onClick={onFavorite} favourite={favourite} />
        </Price.IconWrapper>
      </Price>
    </Container>
  );
};
