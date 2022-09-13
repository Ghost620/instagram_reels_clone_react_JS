import React, { useState, useRef } from 'react'
import './videoCard.css'

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
        <video ref={videoRef} onClick={onVideoPress} className='video_player' src='https://www.youtube.com/watch?v=U4xnsRk4DMc' alt='IG reel video' controls="true" loop/>
    </div>
  )
}

export default Videocard