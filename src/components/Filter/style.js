import styled from "styled-components";

import { ReactComponent as search } from "../../assets/icons/search-icon.svg";
import { ReactComponent as setting } from "../../assets/icons/setting-line.svg";
import { ReactComponent as filterIcon } from "../../assets/icons/filter-icon.svg";
// import { ReactComponent as house } from "../../assets/icons/";

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 64px;
  gap: 20px;

  max-width: var(--width);
  width: 100%;

  margin: auto;
  padding: var(--padding);
`;

const Icon = styled.div``;

Icon.Search = styled(search)`
  margin-right: 8px;
`;

Icon.Setting = styled(setting)`
  margin-right: 8px;
  color: #0061df;
`;
Icon.FilterIcon = styled(filterIcon)`
  margin-right: 8px;
`;

const Advanced = styled.div`
  width: fit-content;
  height: fit-content;
  background: #ffffff;
  border-radius: 5px;
  padding: 10px;
`;
Advanced.Title = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #0d263b;
`;
const Section = styled.div`
  display: flex;
  margin-bottom: 15px;
  justify-content: flex-end;
  gap: 0 20px;
`;

export { Container, Icon, Advanced, Section };
