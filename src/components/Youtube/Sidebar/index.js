import React, { Component } from "react";
import { sidebar } from "../../../utilities/sidebar.js";
import { Container, ItemWrapper, SubTitle, Title, Wrapper } from "./styled.js";

export default class Youtube extends Component {
  render() {
    return (
      <Container>
        {sidebar.map(({ id, title, data }) => (
          <Wrapper key={id}>
            {title && <Title title="true">{title}</Title>}
            {data.map(({ id, title: subTitle, icon: Icons }) => (
              <ItemWrapper key={id}>
                <Icons />
                <SubTitle>{subTitle}</SubTitle>
              </ItemWrapper>
            ))}
          </Wrapper>
        ))}
      </Container>
    );
  }
}
