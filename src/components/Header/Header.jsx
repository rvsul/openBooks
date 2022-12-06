import React, { useState } from "react";
import "./Header.css";
import logoImg from "../../images/books.png";
import searchIcon from "../../images/search.webp";
import axios from "axios";
import Book from "../Book/Book";

function Header({ search, setSearch, searchBook }) {
  return (
    <div className="header">
      <h2>Open Book</h2>
      <img className="logo-image" src={logoImg} alt="" />
      <div className="inputField">
        <input
          className="input"
          type="text"
          placeholder="Search books"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={searchBook}
        />
        <img className="search-icon" src={searchIcon} alt="" />
      </div>
    </div>
  );
}

export default Header;
