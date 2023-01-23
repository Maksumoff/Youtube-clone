import styled, { css } from "styled-components";
import { ReactComponent as group } from "../../../../assets/icons/verticaldots.svg";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  width: 253px;
  height: 250px;
  margin: 0px 8px 40px 8px;
  cursor: pointer;
`;

export const Icons = styled.div``;

const cmnIcons = css`
  width: 24px;
  height: 24px;
  padding: 12px 6px 6px 0px;
  transition: 0.5s;
  -webkit-transition: 0.5s;
`;

Icons.Group = styled(group)`
  ${cmnIcons};
`;

export const VerticalDots = styled.button`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 0px;
  border: none;
  background: #0f0f0f;
  cursor: pointer;
`;

export const Video = styled.img`
  width: 100%;
  height: 140px;
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 0px 12px;
  cursor: pointer;
`;

export const User = styled.img`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  margin: 12px 12px 0px 0px;
`;
export const Title = styled.div`
  display: flex;
  width: 100%;
  flex-direction: ${({ desc }) => (desc ? "column" : "row")};
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  margin: ${({ desc }) => (desc ? "0px 0px 0px 50px" : "12px 0px 6px 0px")};
  color: ${({ desc }) => (desc ? "#989898" : "#ffffff")};
`;

export const Description = styled.div`
  display: flex;
  flex-direction: row;
`;

// export const Icons = styled.div``;

// const common = css`
//   width: 24px;
//   height: 24px;
//   cursor: pointer;
// `;
// Icons.ThreeDots = styled(threedots)`
//   ${common};
// `;
