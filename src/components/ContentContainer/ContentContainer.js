import React, { useEffect } from "react";
import { ContentBox } from "../ContentBox/ContentBox";
import { selectContent, isLoadingContent } from "../ContentBox/ContentSlice";
import { useSelector } from "react-redux";
import './ContentContainer.css';

export function ContentContainer() {
  
  let data = useSelector((state) => state.content.content);

  return (
    <div className="content">
      <ul>
      {data.map((item,i) => <li key={i}><ContentBox index={i} data={item}/></li>)}
      </ul>
    </div>
  )
}