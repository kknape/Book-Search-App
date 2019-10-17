import React from "react";
import "./style.css";

// This file exports the Search field component

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="form-inline" role="form">
      <div className="form-group">
        <label htmlFor="Title" className="sr-only">
          Search Book Title
        </label>
        <input
          className="form-control"
          id="Title"
          type="text"
          value={q}
          placeholder="Enter a keyword..."
          name="q"
          onChange={handleInputChange}
          size="62"
          required
        />
      </div>
      <button
        onClick={handleFormSubmit}
        type="submit"
        className="btn btn-lg search-btn"
      >
        Search
      </button>
    </form>
  );
}

export default Form;
