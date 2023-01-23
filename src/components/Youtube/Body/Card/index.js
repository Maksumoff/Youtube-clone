import React, { Component } from "react";
import {
  Container,
  Title,
  User,
  Video,
  Wrapper,
  Icons,
  VerticalDots,
  Description,
} from "./styled.js";

export default class Card extends Component {
  state = {
    status: false,
  };
  render() {
    const { id, title, user, video, view, time } = this.props.value;
    const { deleteHandler } = this.props;

    return (
      <Container>
        <Video src={video} alt="video content" />
        <Wrapper>
          <Description>
            <User src={user.img} />
            <Title>{title}</Title>
            <VerticalDots onClick={() => deleteHandler(id)}>
              <Icons.Group />
            </VerticalDots>
          </Description>
          <Title desc="true">
            {id} | {user.name} <br />
            {view} · {time}
          </Title>
        </Wrapper>
      </Container>
    );
  }
}

// <Title desc="true">{user.name}</Title>
// <Title desc="true">
//   {view} · {time}
// </Title>
