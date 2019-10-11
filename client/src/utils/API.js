import axios from "axios";

export default {
  //searchBooks

  searchBooks: function() {
    return axios.get("https://www.googleapis.com/books/v1/volumes?q=bugs");
  },

  // Gets all saved books from the db
  getBooks: function() {
    return axios.get("/api/books");
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
