import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex: 1;
  height: 100vh;
  padding-top: 24px;
  margin-left: 20px;
  /* position: relative; */
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    height: 56px !important;
    border-radius: 8px;
    /* border: 4px solid transparent; */
    background-clip: content-box;
    background-color: #ababab;
  }
`;
