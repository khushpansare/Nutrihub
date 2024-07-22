import React from "react";
import { Avatar, Rating } from "@mui/material";
import Slider from "react-slick";

function Sec_4() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Number of cards shown at once
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const cards = Array.from({ length: 10 }, (_, index) => (
    <div className="single-card" key={index}>
      <div className="card-header">
        <div className="left">
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <p>Yash Sakala</p>
        </div>
        <div className="right">
          <Rating
            name="simple-controlled"
            value={"4.5"}
            // onChange={(event, newValue) => {
            //   setValue(newValue);
            // }}
          />
        </div>
      </div>
      <div className="card-body">
        <p>
          Agriutsav helped me turn my struggling farm into a thriving business.
          Their personalized crop recommendations and expert advice have
          significantly increased my yields
        </p>
      </div>
    </div>
  ));

  return (
    <>
      <div className="sec-4">
        <div className="main-card">
          <h2>Testimonial</h2>
          <h1>Our Coustomer Reviews</h1>
          <div className="card-container">
            <Slider {...settings}>{cards}</Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sec_4;
