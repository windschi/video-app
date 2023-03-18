import { useState, useEffect } from 'react';
import VideoServiceAPi from './VideoServiceApi';
import VideoCard from './VideoCard';
import './App.css';

const videoServiceAPi = new VideoServiceAPi();

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    videoServiceAPi.getVideos().then((fetchedVideos) => setVideos(fetchedVideos));
  }, []);

  return (
    <div className="app">
      <div className="video-container">
        {videos.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
