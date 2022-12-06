import Header from "./components/Header/Header.jsx";
import Container from "./components/Container/Container.jsx";
import React, { useState } from "react";
import axios from "axios";

function App() {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          "https://www.googleapis.com/books/v1/volumes?q=" +
            search +
            "&key=AIzaSyB3ob454kusyHjOr4wAuMxIzY_zN3XN6EQ" +
            "&maxResults=40"
        )
        .then((res) => setBookData(res.data.items))
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyD9IvGmntGrR9aRNmzvDuMYZ5NuckurhBw

  return (
    <div className="App">
      <Header searchBook={searchBook} search={search} setSearch={setSearch} />
      <Container bookData={bookData} />
    </div>
  );
}

export default App;
