import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import "./Header.css";

export function Header() {

  return (
    <header>
      <div className="title">
        <img className="logo" src={require('./reddit-logo.png')} />
        <h3 className="headerText">Reddit Lite</h3>
      </div>
      <SearchBar />
    </header>
  )
}