import React, { Component } from "react";
import Card from "./Card";
import { Container } from "./styled.js";

export default class Body extends Component {
  render() {
    // console.log(this.props.data, "data");
    const { data, deleteHandler } = this.props;
    return (
      <Container>
        {data.length ? (
          data.map((value) => (
            <Card key={value.id} value={value} deleteHandler={deleteHandler} />
          ))
        ) : (
          <h1 style={{ textAlign: "center", width: "100%" }}>No data found</h1>
        )}
      </Container>
    );
  }
}
