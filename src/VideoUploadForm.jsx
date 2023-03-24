import React, {useState} from "react";
import { uploadVideo } from "./VideoServiceApi";

const VideoUploadForm = () => {

    const [file, setFile] = useState();
    const [videoName, setVideoName] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault()

        const formData = new FormData();
        formData.append('file', file);
        formData.append('videoName', videoName);

        uploadVideo(formData);

        setFile(null);
        setVideoName("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" value={videoName} placeholder="Video name" onChange={(e) => setVideoName(e.target.value)}></input>
            <input type="file" onChange={(e) => setFile(e.target.files[0])}/>
            <button type="submit">Upload</button>
        </form>
    );
}

export default VideoUploadForm;