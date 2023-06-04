import React from "react";
import { Container } from "./style";
import { Button } from "../../Generics";
import { useNavigate } from "react-router-dom";

export const MyProperties = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <div className="title">My Properties</div>
      <Button onClick={() => navigate("/profile/properties/favourites")}>
        My Favourites
      </Button>
    </Container>
  );
};
