import React, { useState, useEffect } from "react"
import './App.css';
import Videocard from './videocard';
import { db, storage } from './firebase'
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function App() {

  const [filePath, setFilePath] = useState(null)
  const [vidURL, setVidURL] = useState('')

  const Push = async () => {

    if (!filePath) {
      console.log('select a video first')
      return
    }
    const storageRef = ref(storage, `/reels/${filePath.name}`)
    const uploadTask = uploadBytesResumable(storageRef, filePath);

    uploadTask.on("state_changed",
      (snapshot) => {},
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          setVidURL(url)
        });
      }
    );

    await setDoc(doc(db, "reels", `${(Math.pow(Math.random()*9 , 99).toString(36))}`), {
      avatarSrc: 'https://source.unsplash.com/random/300x300',
      channel: `${(Math.random() + 1).toString(36).substring(7)}`,
      likes: `${Math.floor( Math.random()*999 ) + 100}`,
      shares: `${Math.floor( Math.random()*99 ) + 100}`,
      song: `${(Math.random()*99999999999999999999999999999 + 10000).toString(36)}`,
      url: vidURL
    });

    setVidURL('');
    setFilePath(null);

  }

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

        { reels.map( ( { channel, avatarSrc, song, url, likes, shares }, index ) => (

          <Videocard key={index} channel={channel} avatarSrc={avatarSrc} song={song} url={url} likes={likes} shares={shares} />

        ) )}

      </div>

      <div className="upload">
        <input type="file" onChange={ (event) => setFilePath(event.target.files[0]) } accept="/image/*" />
        <button onClick={Push} > Upload </button>
      </div>

    </div>
  );
}

export default App;
