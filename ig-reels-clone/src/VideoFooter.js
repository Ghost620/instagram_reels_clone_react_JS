import React from 'react'
import './VideoFooter.css'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'


function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter_text'>
            <Avatar src={avatarSrc} />
            <h3> {channel} . <Button>Follow</Button> </h3>
        </div>
        
    </div>
  )
}

export default VideoFooter