import React from "react";
import { Container, Logo, LogoHeader, Main, Section, Wrapper } from "./style";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utilis/navbar";
import { Button } from "../../Generics";
import { Filter } from "../Filter";
import { Footer } from "../Footer";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={"logo"}>
            <Logo />
            <LogoHeader>Houzing</LogoHeader>
          </Section>
          <Section>
            {navbar.map(({ title, id, path, hidden }) => {
              return (
                !hidden && (
                  <NavLink to={path} key={id}>
                    {title}
                  </NavLink>
                )
              );
            })}
          </Section>
          <Section>
            <Button
              type={"dark"}
              onClick={() => navigate("./signin")}
              width={130}
            >
              Login
            </Button>
          </Section>
        </Wrapper>
      </Main>
      <Filter />
      <Outlet />
      <Footer />
    </Container>
  );
};
