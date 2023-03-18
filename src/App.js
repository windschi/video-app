import { useEffect } from 'react';
import VideoServiceAPi from './VideoServiceApi';
import './App.css';

const videoServiceAPi = new VideoServiceAPi();

function App() {
  useEffect(() => {
    videoServiceAPi.getVideos();
  }, []);

  return (<></>);
}

export default App;
