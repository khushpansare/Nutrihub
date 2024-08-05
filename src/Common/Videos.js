import React from "react";

function Videos() {
  const videoIds = [
    "NgnBFtOqjik",
    "cAmLeZGENdc",
    "G9-GcpxUvEU", // Replace with different video IDs if needed
  ];

  return (
    <>
      <div className="video-content">
        <h1>
          OUR BEST <mark>BLOGS</mark>
        </h1>

        <div className="video-container">
          {videoIds.map((videoId, index) => (
            <div className="single-video" key={index}>
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&mute=1&controls=1&showinfo=0&modestbranding=1&rel=0`}
                title={`YouTube video player ${index}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Videos;
