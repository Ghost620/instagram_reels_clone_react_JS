import React, { useState, useRef } from 'react'
import './videoCard.css'
import VideoHeader from './VideoHeader'

function Videocard() {

  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

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
        <video ref={videoRef} onClick={onVideoPress} className='video_player' alt='IG reel video' controls loop/>
    </div>
  )
}

export default Videocard