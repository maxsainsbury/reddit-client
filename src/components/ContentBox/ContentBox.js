import React from "react";
import { useSelector } from "react-redux";
import './ContentBox.css'

export function ContentBox({index}) {

  let data = useSelector((state) => state.content.content[index].data);
  console.log(data);

  

  return (
    <div className="content-box">
      <h2>{data.title}</h2>
      {data.is_video === false ? <img src={data.url} /> : 
      <video controls>
      <source src={data.media.reddit_video.fallback_url} />  
      </video>}
      <div className="info">
        <p className="item" title="karma">{data.score} Karma</p>
        <div className="item" title="user">
          <p>Posted on {data.subreddit_name_prefixed}</p>
          <p>By {data.author}</p>
        </div>
        <p className="item" title="time">{} hours ago</p>
        <a href="#" className="item" title="comments">{data.num_comments} Comments</a>
      </div>
    </div>

  )
}