import React from "react";
import Slider from "react-slick";

const videos = [
  {
    id: 1,
    src: "https://www.youtube-nocookie.com/embed/WKhaaFe6CSQ?showinfo=1&rel=0&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
  },
  {
    id: 2,
    src: "https://www.youtube-nocookie.com/embed/WKhaaFe6CSQ?showinfo=1&rel=0&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
  },
  {
    id: 3,
    src: "https://www.youtube-nocookie.com/embed/WKhaaFe6CSQ?showinfo=1&rel=0&autoplay=1&mute=1&controls=0&modestbranding=1&rel=0",
  },
];

function Sec_1() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <>
      <div className="sec-1">
        <div className="video-slider-container">
          <Slider {...settings}>
            {videos.map((video) => (
              <div key={video.id} className="video-slide">
                <iframe
                  src={video.src}
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="slider-video"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Sec_1;
