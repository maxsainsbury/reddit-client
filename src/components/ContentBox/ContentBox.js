import React from "react";
import './ContentBox.css'

export function ContentBox() {

  let postedBy = 'Max';
  let karma = 200;
  let time = 1;
  let commentNum = 300;

  

  return (
    <div className="content-box">
      <h2>Title</h2>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/SMPTE_Color_Bars.svg/1024px-SMPTE_Color_Bars.svg.png" />
      <div className="info">
        <p className="item" title="karma">{karma} Karma</p>
        <p className="item" title="user">Posted By {postedBy}</p>
        <p className="item" title="time">{time} hours ago</p>
        <a href="#" className="item" title="comments">{commentNum} Comments</a>
      </div>
    </div>

  )
}