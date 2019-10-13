const axios = require("axios");
const db = require("../models");

// Defining methods for the googleController
// findAll searches the Google Books API and returns the entries
//Return title, author, link, description, and image
module.exports = {
  bookQuery: function(req, res) {
    console.log(req.query);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?" + req.query.q)
      .then(response => {
        console.log(response.data);
        res.json(response.data);
      })
      .catch(err => res.status(422).json(err));
  }
};

/*
axios.get("https://www.googleapis.com/books/v1/volumes?q='title:there'")
  .then(function (response) {
    // handle success
    console.log(response);
  }) */
