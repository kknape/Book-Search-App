import React from "react";

// This file exports the Search field component

function Form({ q, handleInputChange, handleFormSubmit }) {
  return (
    <form className="form-inline" role="form">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="Title" className="sr-only">
          Search Book Title
        </label>
        <input
          className="form-control heading-subtitle"
          id="Title"
          type="text"
          value="{q}"
          placeholder="Enter a book title..."
          name="q"
          onChange={handleInputChange}
          size="62"
          required
        />
      </div>
      <button
        onClick={handleFormSubmit}
        type="submit"
        className="btn btn-lg heading-subtitle"
      >
        Search
      </button>
    </form>
  );
}

export default Form;
