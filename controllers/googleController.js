const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController
// findAll searches the Google Books API and returns the entries
//Return title, author, link, description, and image
module.exports = {
  bookQuery: function(req, res) {
    console.log(req.query.q);

    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q)
      .then(response => {
        // filter out only the books that have an
        // id, title, infoLink, authors, description, and thumbnail
        const results = response.data.items
          .filter(book => {
            return;
            book.id &&
              book.volumeInfo.title &&
              book.volumeInfo.infoLink &&
              book.volumeInfo.authors &&
              book.volumeInfo.description &&
              book.volumeInfo.imageLinks &&
              book.volumeInfo.imageLinks.thumbnail;
          })
          .map(book => {
            // map and send back to client only the
            // id, title, infoLink, authors, description, and thumbnail
            return {
              id: book.id,
              title: book.volumeInfo.title,
              infoLink: book.volumeInfo.infoLink,
              authors: book.volumeInfo.authors.join(","),
              description: book.volumeInfo.description,
              thumbnail: book.volumeInfo.imageLinks.thumbnail
            };
          });
        res.json(results);
      })
      .catch(err => res.status(422).json(err));
  }
};
