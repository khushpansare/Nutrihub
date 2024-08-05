import React from "react";
import Slider from "react-slick";

function Sec_3() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Number of cards shown at once
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = Array.from({ length: 10 }, (_, index) => (
    <div
      key={index}
      className={`card hover-card ${index % 2 === 0 ? "even" : ""}`}>
      <img
        src={`https://via.placeholder.com/230x300?text=Card+${index + 1}`}
        alt={`Card ${index + 1}`}
      />
    </div>
  ));

  return (
    <>
      <div className="sec-3">
        <h1>Watch our Gallery</h1>
        <div className="slider-container">
          <Slider {...settings}>{cards}</Slider>
        </div>
      </div>
    </>
  );
}

export default Sec_3;
