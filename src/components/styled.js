import styled, { css } from "styled-components";
import { ReactComponent as menu } from "../assets/icons/menu.svg";
import { ReactComponent as search } from "../assets/icons/search.svg";
import { ReactComponent as video } from "../assets/icons/vector.svg";
import { ReactComponent as apps } from "../assets/icons/apps.svg";
import { ReactComponent as notifications } from "../assets/icons/bell.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => !flex && "column"};
  height: 100%;
  background: #0f0f0f;
  color: #fff;
  /* padding: ${({ flex }) => !flex && "0px 16px"}; */
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background: #0f0f0f;
  padding: 0px 16px;
`;

export const Category = styled.div`
  display: flex;
  flex: ${({ input }) => input && "0 1 728px"};
  align-items: center;
  justify-content: ${({ end }) => end && "flex-end"};
  /* padding: ${({ leftPadding }) =>
    leftPadding ? "0px 0px 0px 4px" : "0px"}; */
`;

export const Icons = styled.div``;

const common = css`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

Icons.Search = styled(search)`
  ${common};
`;

export const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 6px;
  background-color: #ffffff14;
  border-radius: 0px 40px 40px 0px;
  border: 1px solid rgb(48, 48, 48);
  width: 50px;
  height: 36px;
`;

const cmnIcons = css`
  width: 24px;
  height: 24px;
  padding: 8px;
  cursor: pointer;
  :hover {
    background-color: #323232;
    border-radius: 50%;
    width: 24px;
    height: 24px;
    padding: 8px;
  }
`;
Icons.Menu = styled(menu)`
  ${cmnIcons}/* ${common}; */
`;

export const MenuBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0f0f0f;
  border: none;
  padding: ${({ user }) => (user ? "1px 6px" : "0px")};
`;

Icons.Video = styled(video)`
  ${cmnIcons}
  margin-right:8px;
`;

Icons.Apps = styled(apps)`
  margin-right: 8px;
  ${cmnIcons}
`;
Icons.Notifications = styled(notifications)`
  ${cmnIcons}
  margin-right:8px;
`;

Icons.Logo = styled.img`
  padding: 18px 14px 18px 16px;
`;

export const Input = styled.input`
  height: 38px;
  background: #121212;
  border: 1px solid rgb(48, 48, 48);
  border-radius: 40px 0px 0px 40px;
  color: #f1f1f1;
  width: 100%;
  max-width: 500px;
  font-family: "Roboto", "Noto", "sans-serif";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding: 0px 4px 0px 16px;
  margin-left: 32px;
  display: flex;
  flex: 1;
  :focus {
    outline: none;
  }
`;

export const User = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0px 8px;
`;
