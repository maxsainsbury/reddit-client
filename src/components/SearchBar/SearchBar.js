import React, {useState} from "react";
import './SearchBar.css';
import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, changeUseSearch, clearParams } from "../ContentBox/ContentSlice";

export function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch();
  const useSearch = useSelector((state) => state.content.useSearch);

  const handleChange = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  }

  const searchSubmit = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(useSearch)
    dispatch(changeSearchTerm(searchTerm));
    dispatch(clearParams());
    if (useSearch === false) {
      dispatch(changeUseSearch());
    }
  }

  return (
    <form className="Search" onSubmit={searchSubmit}>
      <input className="SearchBox" type='text' onChange={handleChange}></input>
      <button className="SearchButton"><span class="material-symbols-outlined">
search
</span></button>
    </form>
  )
}