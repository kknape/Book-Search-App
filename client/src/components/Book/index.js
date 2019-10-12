import React from "react";
import { ListItem } from "../List";

const Book = ({ title, author, description, image, link }) => {
  const truncateText = (str, length, ending) => {
    if (str) {
      if (length == null) {
        length = 100;
      }
      if (ending == null) {
        ending = "...";
      }
      if (str.length > length) {
        return str.substring(0, length - ending.length) + ending;
      } else {
        return str;
      }
    }
    return str;
  };

  const truncateDescription = truncateText(description, 255, "...");
  console.log("TEST1");
  return <ListItem>{console.log("TEST2")}</ListItem>;
  console.log("TEST3");
};

export default Book;
