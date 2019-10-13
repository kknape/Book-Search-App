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
        console.log(response.data);
        res
          .json(
            response.data.items.filter(
              result =>
                result.item.volumeInfo.title &&
                result.item.volumeInfo.infoLink &&
                result.item.volumeInfo.authors &&
                result.item.volumeInfo.description &&
                result.item.volumeInfo.imageLinks &&
                result.item.volumeInfo.imageLinks.thumbnail
            )
          )
          .then(apiBooks =>
            db.Book.find().then(dbBooks =>
              apiBooks.filter(apiBook =>
                dbBooks.every(
                  dbBook => dbBook.googleId.toString() !== apiBook.id
                )
              )
            )
          )
          .then(books => res.json(books))
          .catch(err => res.status(422).json(err));
      });
  }
};
