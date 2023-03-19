import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import {getVideos} from './VideoServiceApi.js';
import './App.css';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((fetchedVideos) => setVideos(fetchedVideos));
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
