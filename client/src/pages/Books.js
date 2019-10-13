//This page will have Search and display results

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// eslint-disable-next-line
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import Book from "../components/Book";

class Books extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for books..."
  };

  componentDidMount() {
    this.loadBooks();
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
    API.getBooks(this.state.q)
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err + "There is an error"));

    this.setState({
      books: [],
      message: "No results."
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks();

    console.log("TEST-NEW");
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>What Books Should I Read?</h1>
            </Jumbotron>
            <Form
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              q={this.state.q}
            />
          </Col>
        </Row>

        <Row>
          <Col size="md-12">
            <h1 className="text-center">Results</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <Book
                    key={book.id}
                    title={book.volumeInfo.title}
                    link={book.volumeInfo.infoLink}
                    authors={book.volumeInfo.authors.join(", ")}
                    description={book.VolumeInfo.description}
                    image={book.VolumeInfo.imageLink.thumbnail}
                  />
                ))}
              </List>
            ) : (
              <div className="mockup-content">
                <h2 className="heading-title text-center">
                  {this.state.message}
                </h2>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}
export default Books;
