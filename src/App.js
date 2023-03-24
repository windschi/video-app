import { useState, useEffect } from 'react';
import VideoCard from './VideoCard';
import {getVideos} from './VideoServiceApi.js';
import './App.css';
import VideoUploadForm from './VideoUploadForm';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos().then((fetchedVideos) => setVideos(fetchedVideos));
  }, []);

  return (
    <div className="app">
      <div className="VideoUploadContainer">
        <VideoUploadForm />
      </div>
      
      <div className="video-container">
        {videos.map((video) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
