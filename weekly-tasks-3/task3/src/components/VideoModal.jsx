import React from 'react';

const VideoModal = ({ videoUrl, onClose }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="btn" onClick={onClose}>Close</button>
                {
                    videoUrl.includes("youtube.com") ? (
                        <iframe
                            width="100%"
                            height="400"
                            src={videoUrl}
                            title="Course Video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <video src={videoUrl} controls width="100%" />
                    )
                }
            </div>
        </div>
    );
};

export default VideoModal;
