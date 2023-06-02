import React from "react";
import { Container, Logo, LogoHeader, Main, Section, Wrapper } from "./style";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { navbar } from "../../utilis/navbar";
import { Button } from "../../Generics";
import { Filter } from "../Filter";
import { Footer } from "../Footer";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onLogin = () => {
    navigate("/login");
  };

  const onLogout = () => {
    localStorage.removeItem("token");
    navigate("/home");
    // if (location?.pathname?.includes("profile")) {
    //   navigate("/home");
    // } else {
    //   navigate("/login");
    // }
  };
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
            {localStorage.getItem("token") ? (
              <>
                <Button
                  type={"dark"}
                  onClick={() => navigate("/profile/properties")}
                  width={130}
                  mr={20}
                >
                  Profile
                </Button>
                <Button type={"dark"} onClick={onLogout} width={130}>
                  Logout
                </Button>
              </>
            ) : (
              <Button type={"dark"} onClick={onLogin} width={130}>
                Login
              </Button>
            )}
          </Section>
        </Wrapper>
      </Main>
      {location.pathname === "/properties" && <Filter />}
      <Outlet />
      <Footer />
    </Container>
  );
};
