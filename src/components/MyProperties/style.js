import { Table } from "antd";
import styled from "styled-components";
import { ReactComponent as trash } from "../../assets/svgs/trash.svg";
import { ReactComponent as edit } from "../../assets/svgs/edit.svg";

export const Container = styled.div`
  width: 100%;
  padding: 34px 0;
`;

export const AntdTable = styled(Table)``;

export const IconWrapper = styled.div`
  width: 35px;
  height: 35px;
  background: #f6f8f9;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: #c3c6c7;
  }

  &:active {
    transform: scale(0.97);
  }

  & path {
    fill: #696969;
  }
`;
export const Trash = styled(trash)``;
export const Edit = styled(edit)``;
