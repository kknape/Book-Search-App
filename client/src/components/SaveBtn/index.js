import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveBtn(props) {
  return (
    <span
      className="btn save-btn p-2 bd-highlight"
      {...props}
      role="button"
      tabIndex="0"
    >
      Save
    </span>
  );
}
export default SaveBtn;
