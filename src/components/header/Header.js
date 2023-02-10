import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";
import { clearAll } from "../ContentBox/ContentSlice";
import "./Header.css";
import { useDispatch } from "react-redux";

export function Header() {

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(clearAll());
  }

  return (
    <header>
      <div className="title" onClick={handleClick}>
        <img className="logo" alt="reddit-logo" src={require('./reddit-logo.png')} />
        <h3 className="headerText">Reddit Lite</h3>
      </div>
      <SearchBar />
    </header>
  )
}