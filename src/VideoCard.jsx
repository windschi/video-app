import React from "react";

const VideoCard = ({ video }) => {
    return (
        <div className="video">
            <div>
                <h3>{video.videoName}</h3>
            </div>
            <div>
                <img src={video._links.thumbnailUrl.href} alt={video.videoName}/>
            </div>
            <div>
                <p>{video.createdAt}</p>
            </div>
        </div>
    )
}

export default VideoCard;