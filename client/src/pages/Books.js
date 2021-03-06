//This page will have Search and display results

import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import Book from "../components/Book";
import SaveBtn from "../components/SaveBtn";

class Books extends Component {
  state = {
    books: [],
    q: "",
    message: "Search for books..."
  };

  componentDidMount() {}

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  loadBooks = () => {
    API.getBooks(this.state.q)
      .then(res => {
        if (res && res.data.length > 0) {
          //simple validation before setting state
          this.setState({ books: res.data });
        } else {
          // if backend doesn't respond with appropriate data then reset UI.
          this.setDefaultState();
        }
      })
      .catch(err => {
        console.log(err + "-There is an error.");
        this.setDefaultState();
      });
  };

  //function to reset state when needed
  setDefaultState = () => {
    this.setState({
      books: [],
      savedBooks: [],
      message: "No results."
    });
  };

  //handles search form input
  handleFormSubmit = event => {
    event.preventDefault();
    this.loadBooks();
  };

  //handles save button
  handleSavedBook = id => {
    const book = this.state.books.find(book => book.id === id);
    console.log(book);

    API.saveBook({
      googleId: book.id,
      title: book.title,
      author: book.authors,
      image: book.thumbnail,
      description: book.description,
      link: book.infoLink
    }).then(() => API.getBooks());
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
                {this.state.books.map(book => {
                  return (
                    <Fragment key={book.id}>
                      <Book
                        title={book.title}
                        link={book.infoLink}
                        authors={book.authors}
                        description={book.description}
                        image={book.thumbnail}
                      />
                      <div className="p-2 bd-highlight">
                        <SaveBtn
                          onClick={() => this.handleSavedBook(book.id)}
                          className="save-btn"
                        />
                      </div>
                    </Fragment>
                  );
                })}
              </List>
            ) : (
              <div>
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
