import React from "react";
import Book from "../Book/Book";
import "./Container.css";

function Container({ bookData }) {
  return <div className="container">{<Book bookData={bookData} />}</div>;
}

export default Container;
