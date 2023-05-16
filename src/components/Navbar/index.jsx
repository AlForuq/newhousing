import React from "react";
import { Container, Logo, LogoHeader, Main, Section, Wrapper } from "./style";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { navbar } from "../../utilis/navbar";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Main>
        <Wrapper>
          <Section onClick={() => navigate("/home")} logo={'logo'} >
            <Logo />
            <LogoHeader>Houzing</LogoHeader>
          </Section>
          <Section>
            {navbar.map(({ title, id, path }) => {
              return (
                <NavLink to={path} key={id}>
                  {title}
                </NavLink>
              );
            })}
          </Section>
          <Section>
            <button>Login</button>
          </Section>
        </Wrapper>
      </Main>
      <Outlet />
    </Container>
  );
};
