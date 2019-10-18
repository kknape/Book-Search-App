//This page will hold saved articles

import React, { Component, Fragment } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import DeleteBtn from "../components/DeleteBtn";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import "../components/Book/style.css";

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

            <Row>
              <Col size="md-12">
                {this.state.books.length ? (
                  <List>
                    {this.state.books.map(book => {
                      return (
                        <Fragment key={book.id}>
                          <ListItem>
                            <div className="media-snippet">
                              <article className="media">
                                <figure className="media-left">
                                  <p>
                                    <img
                                      className="image is-128xauto"
                                      src={book.image}
                                      alt={book.title}
                                    />
                                  </p>
                                </figure>
                                <div className="media-content">
                                  <h3 className="heading-title">
                                    {book.title}
                                  </h3>
                                  <p className="heading-subtitle">
                                    by {book.author} (Author)
                                  </p>
                                  <p className="p-article">
                                    {book.description}
                                  </p>
                                  {/*link to view the book on google*/}
                                  <div className="d-flex flex-row bd-highlight mb-3">
                                    <div className="p-2 bd-highlight">
                                      <a
                                        href={book.link}
                                        className="view-btn"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        View
                                      </a>
                                      {/*delete book from your saved list*/}
                                      <DeleteBtn
                                        onClick={() =>
                                          this.handleBookDelete(book._id)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                              </article>
                            </div>
                          </ListItem>
                        </Fragment>
                      );
                    })}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Saved;
