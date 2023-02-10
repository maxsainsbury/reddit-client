import React from "react";
import { ContentBox } from "../ContentBox/ContentBox";
import { changePage } from "../ContentBox/ContentSlice";
import { useSelector, useDispatch } from "react-redux";
import './ContentContainer.css';

export function ContentContainer() {
  
  let data = useSelector((state) => state.content.content);
  let page = useSelector((state) => state.content.page);
  let dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault()
    console.log(e);
    let direction;
    if (e.target.textContent === 'next') {
      direction = 1;
    }
    else {
      if (page === 0) {
        return;
      }
      direction = -1
    }
    dispatch(changePage(direction));
  };

  return (
    <div className="content">
      <ul>
      {data.map((item,i) => <li key={i}><ContentBox index={i} data={item}/></li>)}
      </ul>
      <div className="pages">
        <button className="pages-button" onClick={handleClick}>prev</button>
        <button className="pages-button" onClick={handleClick}>next</button>
      </div>
    </div>
  )
}