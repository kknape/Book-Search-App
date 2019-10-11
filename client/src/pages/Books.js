//This page will have Search and display results

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// eslint-disable-next-line
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
// eslint-disable-next-line
import { List, ListItem } from "../components/List";
// eslint-disable-next-line
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input name="title" placeholder="Book (required)" />
              <FormBtn>Search</FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
