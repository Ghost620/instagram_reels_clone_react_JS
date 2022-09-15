import React from 'react'
import './VideoFooter.css'
import Button from '@mui/material/Button'
import Avatar from '@mui/material/Avatar'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function VideoFooter({ channel, song, likes, shares, avatarSrc }) {
  return (
    <div className='videoFooter'>

        <div className='videoFooter_text'>
          <Avatar src={avatarSrc} />
          <h3> {channel} . <Button>Follow</Button> </h3>
        </div>

        <div className='videoFooter_ticker'>
          <MusicNoteIcon className='videoFooter_icon' />
          <Ticker>
            {({ index }) => (
              <>
                <h1>{song}</h1>
              </>
            )}
          </Ticker>
        </div>

        <div className='videofooter_actions'>

          <div className='actions_left'>
            <FavoriteIcon fontSize='large' />
            <ModeCommentIcon fontSize='large' />
            <SendIcon fontSize='large' />
            <MoreHorizIcon fontSize='large' />
          </div>

          <div className='actions_right'>
              
          </div>

        </div>
        
    </div>
  )
}

export default VideoFooter