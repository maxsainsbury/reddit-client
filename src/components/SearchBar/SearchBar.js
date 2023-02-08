import React from "react";
import './SearchBar.css';

export function SearchBar() {

  return (
    <form className="Search">
      <input className="SearchBox" type='text'></input>
      <button className="SearchButton"><span class="material-symbols-outlined">
search
</span></button>
    </form>
  )
}