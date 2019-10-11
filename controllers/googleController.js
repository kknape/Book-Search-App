const axios = require("axios");

//const BASEURL = "https://www.googleapis.com/books/v1/volumes?q='title:";

// Defining methods for the googleController

module.exports = {
  bookQuery: function(req, res) {
    console.log(req.query);
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + req.query.q)
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
