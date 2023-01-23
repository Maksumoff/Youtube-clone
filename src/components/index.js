import React, { Component } from "react";
import Body from "../components/Youtube/Body/index.js";
import Sidebar from "../components/Youtube/Sidebar/index.js";
import {
  Category,
  Container,
  Wrapper,
  Icons,
  Input,
  User,
  Search,
  MenuBtn,
} from "./styled";
import logo from "../assets/imgs/Youtube-Logo.png";
import user from "../assets/imgs/iman.uz.png";
import { data } from "../mock.js";

class Youtube extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
    };
  }
  render() {
    const searchHandler = (e) => {
      // console.log(e.target.value);
      let res = data.filter((value) =>
        value.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      // console.log(res);
      this.setState({ data: res });
    };

    const deleteHandler = (id) => {
      // console.log(id);
      let res = this.state.data.filter((value) => value.id !== id);
      this.setState({ data: res });
    };

    return (
      <Container>
        <Wrapper>
          <Category leftPadding="true">
            <MenuBtn>
              <Icons.Menu />
            </MenuBtn>
            <Icons.Logo src={logo} alt="image" />
          </Category>
          <Category input="true">
            <Input placeholder="Search" onChange={searchHandler} />
            <Search>
              <Icons.Search />
            </Search>
          </Category>
          <Category end="true">
            <Icons.Video />
            <Icons.Apps />
            <Icons.Notifications />
            <MenuBtn user="true">
              <User src={user} alt="iman.uz" />
            </MenuBtn>
          </Category>
        </Wrapper>
        <Container flex>
          <Sidebar />
          <Body deleteHandler={deleteHandler} data={this.state.data} />
        </Container>
      </Container>
    );
  }
}

export default Youtube;
