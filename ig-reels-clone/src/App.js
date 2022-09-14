import './App.css';
import Videocard from './videocard';

function App() {
  return (
    <div className="App">
      
      <div className='app_top'>

        <img className="app_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png" alt=""/>
        <h1>Reels</h1>

      </div>

      <div className='app_videos'>
        <Videocard channel='abc' avatarSrc='https://cdn.pixabay.com/photo/2022/09/06/21/13/energy-saving-7437499_960_720.jpg' song='Baby - 123' url='https://player.vimeo.com/video/487508532?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1' likes={400} shares={25}/>
        <Videocard />
        <Videocard />
        <Videocard />
        <Videocard />
      </div>

    </div>
  );
}

export default App;
