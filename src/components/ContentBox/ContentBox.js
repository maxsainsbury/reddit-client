import React from "react";
import { useSelector } from "react-redux";
import './ContentBox.css'

export function ContentBox({index}) {

  let data = useSelector((state) => state.content.content[index].data);
  console.log(data);

  const whatsInBody = (data) => {
    if (data.is_reddit_media_domain) {
      if (data.is_video) {
        return (
          <video className="media" controls>
            <source src={data.media.reddit_video.fallback_url} />  
          </video> 
        )
      }
      else {
        return (
          <img className="media" src={data.url} />
        )
      }
    }
    else if (data.url.includes('imgur')) {
      return (
        <img className="media" src={data.url} />
      )
    }
    else if (!data.url.includes('reddit')) {
      return (
        <a className="outsideLink" href={data.url}>{data.url}</a>
      )
    }
  }

  return (
    <div className="content-box">
      <h2>{(data.over_18 === true) 
      ? <span className="NSFW">NSFW</span> 
      : <span></span>} {data.title}</h2>

      {whatsInBody(data)}

      <p className="selftext">{data.selftext}</p>
      <div className="info">
        <p className="item" title="karma">{data.score} Karma</p>
        <p className="item">Posted on {data.subreddit_name_prefixed}</p>
        <p className="item">By {data.author}</p>
        <a href={`https://www.reddit.com${data.permalink}`} className="item" title="comments">{data.num_comments} Comments</a>
      </div>
    </div>

  )
}