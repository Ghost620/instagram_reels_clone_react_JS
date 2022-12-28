import React, { useState, useRef } from 'react'
import './videoCard.css'
import VideoHeader from './VideoHeader'
import VideoFooter from './VideoFooter'

function Videocard({ url, likes, shares, channel, avatarSrc, song }) {

  const [ isVideoPlaying, setIsVideoPlaying ] = useState(false)

  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (isVideoPlaying) {
      videoRef.current.pause()
      setIsVideoPlaying(false)
    } else {
      videoRef.current.play()
      setIsVideoPlaying(true)
    }
  }

  return (
    <div className='videoCard'>
        <VideoHeader />
        <video autoPlay muted ref={videoRef} onClick={onVideoPress} className='video_player' src={url} alt='IG reel video' loop />
        <VideoFooter channel={channel} likes={likes} shares={shares} avatarSrc={avatarSrc} song={song} />
    </div>
  )
}

export default Videocard