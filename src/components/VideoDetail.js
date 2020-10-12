import React from 'react';
import "./VideoDetail.css"; 

const VideoDetail = ({video}) => {
  if(!video) {
    return <div>Loading...</div>; 
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  console.log(videoSrc);
  return(
    <div className="video-detail container">
      <div className="">
        <iframe title="video player" height="315" src={videoSrc} className=""></iframe> 
      </div>
      <div className="video-detail-title">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail; 