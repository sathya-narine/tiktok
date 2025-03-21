import React from 'react'
import './VideoSidebar.css';
import { useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSidebar({ likes, shares, messages }) {
  const [liked,setLiked] = useState(false);

  return (
    <div className='videoSidebar'>
      
      <div className='videoSidebar_button'>
        {
          liked ? (
            <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)}/>
          ) : (
            <FavoriteBorderIcon fontSize="large" onClick={(e) => setLiked(true)}/> 
          )
        }
        <p>{liked ? likes+1 : likes}</p>
      </div>
      <div className='videoSidebar_button'>
        <div className='videoSidebar_button'>
        <MessageIcon fontSize="large"/>
        <p>{ messages }</p>
        </div>
      </div>
      <div className='videoSidebar_button'>
      <ShareIcon fontSize="large"/>
      <p>{ shares}</p>
      </div>
    </div>
  )
}

export default VideoSidebar
