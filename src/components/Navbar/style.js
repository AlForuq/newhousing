import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/icons/logo.svg";
const Container = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: var(--colorPrimary);
  color: #fff;
  padding: var(--padding);
  height: var(--height);
  font-size: var(--fontSize);

  max-width: var(--width);
  width: 100%; // 2
  /* margin: auto; // 1 */
`;

export const Main = styled.div`
  background: #0d263b;
  display: flex; // 2
  justify-content: center; // 2
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  cursor: ${({ logo }) => logo === "logo" && "pointer"};

  a:active {
    color: var(--colorSecondary);
  }
  a {
    text-decoration: none;
    color: white;
    margin: var(--marginNavLink);
  }
  .active {
    color: red;
  }
`;

const Logo = styled(logo)`
  width: var(--logoWidth);
  margin-right: var(--logoMargin);
  & path {
    fill: #fff;
  }
`;

const LogoHeader = styled.div`
  font-size: var(--logoHeaderFsize);
`;

export { Container, Wrapper, Section, Logo, LogoHeader };
