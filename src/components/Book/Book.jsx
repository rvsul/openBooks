import React from "react";
import "./Book.css";
import bookImg from "../../images/asdad.jpeg";
import Modal from "./../Modal/Modal";

function Book({ bookData }) {
  console.log(bookData);

  return (
    <>
      {bookData.map((book) => {
        let thumbnail =
          book.volumeInfo.imageLinks &&
          book.volumeInfo.imageLinks.smallThumbnail;

        if (thumbnail != undefined) {
          return (
            <div className="book">
              <div className="book-container">
                <div className="image-div">
                  <img className="book-image" src={thumbnail} alt="img" />
                </div>
                <div className="title-div">
                  <h2>{book.volumeInfo.title}</h2>
                </div>
                <div className="price-div">
                  <h3>${Math.floor(Math.random() * (35 - 10 + 1)) + 10}</h3>
                </div>
              </div>
              {/* <Modal /> */}
            </div>
          );
        }
      })}
    </>
  );
}

export default Book;
