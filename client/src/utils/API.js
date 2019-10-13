import axios from "axios";

export default {
  //searchBooks

  getBooks: function(q) {
    // return axios.get("https://www.googleapis.com/books/v1/volumes?q=bugs");
    return axios.get("/api/search", { params: { q: "title:" + q } });
  },

  // Gets all saved books from the db
  getSavedBooks: function() {
    return axios.get("/api/books");
  },

  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },

  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  }
};
