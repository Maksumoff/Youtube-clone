import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  /* height: 100vh; */
  height: calc(100vh - 60px);
  overflow-y: hidden;
  :hover {
    overflow-y: scroll;
    transition: overflow-y 0.3s linear 0s;
  }
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    /* height: 56px !important; */
    border-radius: 8px;
    /* border: 4px solid transparent; */
    background-clip: content-box;
    background-color: #ababab;
  }

  /* top: 83px;
  left: 0px;
  position: absolute;
  background-color: #0f0f0f; */
`;

export const Wrapper = styled.div`
  border-bottom: 1px solid #ffffff1a;
  /* margin-right: 4px; */
  padding: 12px;
`;

export const Title = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  padding: ${({ title }) => (title ? "0px 12px" : "0px 12px")};
  font-family: "Roboto", "Arial", sans-serif;
  font-size: ${({ title }) => (title ? "16px" : "14px")};
  line-height: 24px;
  font-weight: 500;
  height: 40px;
  /* margin-left: ${({ title }) => (title ? "0px" : "24px")}; */
  color: ${({ title }) => (title ? "#f1f1f1" : "#f1f1f1")};
`;

export const SubTitle = styled(Title)`
  padding: 0px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 12px;
  cursor: pointer;
  transition: 0.2s;
  /* margin-right: 12px; */
  :hover {
    background-color: #323232;
    border-radius: 10px;
    /* padding: 0px 30px; */
  }
`;
