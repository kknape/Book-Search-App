import axios from "axios";

export default {
  // Getall saved books as JSON
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a new book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  //load your single HTML page in client/build/index.html
  loadPage: function() {
    return axios.get("*");
  }
};
