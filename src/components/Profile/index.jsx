import React, { useContext } from "react";
import { Container } from "./style";
import { Tabs } from "antd";
import { MyFavourites } from "../MyFavourites";
import { MyProperties } from "../MyProperties";
import { FavouritesContext } from "../../context/favourites";
import { KeyContext } from "../../context/key";

const items = [
  {
    key: "1",
    label: `My Properties`,
    children: <MyProperties />,
  },
  {
    key: "2",
    label: `My Favourites`,
    children: <MyFavourites />,
  },
];
export const Profile = () => {
  const [refetcher] = useContext(FavouritesContext);
  const [key, setKey] = useContext(KeyContext);
  const onChange = (key) => {
    if (key === "2") {
      setKey(key);
      refetcher?.fav && refetcher?.fav();
    } else if (key === "1") {
      setKey(key);
      refetcher?.pro && refetcher?.pro();
    }
  };
  return (
    <Container>
      <Tabs
        activeKey={key}
        size={"large"}
        tabBarStyle={{ fontFamily: "monospace", fontWeight: 550 }}
        items={items}
        onChange={onChange}
      />
    </Container>
  );
};
