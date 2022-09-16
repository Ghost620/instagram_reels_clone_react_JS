import React, { useState, useEffect } from "react"
import './App.css';
import Videocard from './videocard';
import db from './firebase'

function App() {

  const [reels, setReels] = useState([])

  useEffect( () => {
    // Run when loads and never again
    db.collection('reels').onSnapshot(snapshot => {
      setReels(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="App">
      
      <div className='app_top'>

        <img className="app_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt=""/>
        <h1>Reels</h1>

      </div>

      <div className='app_videos'>

        {reels.map( ( { channel, avatarSrc, song, url, likes, shares } ) => (

          <Videocard channel={channel} avatarSrc={avatarSrc} song={song} url={url} likes={likes} shares={shares} />

        ) )}

      </div>

    </div>
  );
}

export default App;
