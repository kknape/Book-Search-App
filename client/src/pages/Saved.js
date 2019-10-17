//This page will hold saved articles

import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Book from "../components/Book/index";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.getSavedBooks();
  }

  getSavedBooks = () => {
    API.getSavedBooks()
      .then(res => this.setState({ books: res.data }))
      .catch(err => console.log(err));
  };

  handleBookDelete = async id => {
    const currentBooks = this.state.books;
    try {
      await API.deleteBook(id).then(res => this.getSavedBooks());
    } catch (err) {
      if (err.response && err.response.status === 404)
        console.log(err + "-There is an error.");
      this.setState({ books: currentBooks });
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>My Saved Books</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <a href={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </a>
                    {book.infoLink}
                    {book.description}
                    {book.thumbnail}
                    <p>
                      <img
                        className="image is-128xauto"
                        src={book.thumbnail}
                        alt={book.title}
                      />
                    </p>

                    <div className="p-2 bd-highlight">
                      <DeleteBtn
                        onClick={() => this.handleBookDelete(book._id)}
                      />
                    </div>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
