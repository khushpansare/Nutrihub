import React from "react";
import Layout from "../Main Component/Layout";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import { MetaTags } from "react-meta-tags";
import Slider from "react-slick";

// Component
import Image from "../Assets/about/image-asset.png";
import Vision from "../Assets/about/vision1.png";
import Mission from "../Assets/about/mission2.png";

import Best_Service from "../Assets/about/sec-img/best-service.png";
import Commitement from "../Assets/about/sec-img/commitement.png";
import Excellence from "../Assets/about/sec-img/excellence.png";
import Innovation from "../Assets/about/sec-img/innovation.png";
import Integrity from "../Assets/about/sec-img/integrity.png";
import Partnership from "../Assets/about/sec-img/partnership.png";
import Quality from "../Assets/about/sec-img/quality.png";
import Respect_Care from "../Assets/about/sec-img/respect-care.png";

const cards = [
  {
    src: Best_Service,
    head: "Best Services",
    para: "We provide best services in agriculture products",
  },
  {
    src: Integrity,
    head: "Integrity",
    para: "We uphold and live by the highest standards of Integrity.",
  },
  {
    src: Commitement,
    head: "Customer commitment",
    para: "We deliver on our promises and strive to create maximum value for our customers.",
  },

  {
    src: Quality,
    head: "Quality",
    para: "We manufacture outstanding products that you count on to perform,even under the most rigorous conditions.",
  },
  {
    src: Excellence,
    head: "Excellence",
    para: "We are committed to excellence and strive to constantly better our performance and surpass all expectations.",
  },
  {
    src: Innovation,
    head: "Innovation",
    para: "We firmly believe that excellence can only be achieved through Innovation and continuous improvement.",
  },
  {
    src: Respect_Care,
    head: "Respect & Care",
    para: "We believe that every individual with whom we interact is deserving of the dignity of our respect.",
  },
  {
    src: Partnership,
    head: "Partnership",
    para: "We view our customers as our partners and believe that success can only be meaningful if it is mutual.",
  },
];

function About() {
  const settings = {
    dots: false,
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
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <MetaTags>
        <title>Nutrihub | About us </title>
        <meta name="Nutrihub" content="Nutrihub" />
      </MetaTags>
      <BreadcrumbsItem to={"/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={"/event"}>About us</BreadcrumbsItem>

      <Layout>
        <BreadCrumb name="About us" />
        <div className="about-content">
          <div className="sec-1">
            <div className="left">
              <h2>Welcome To Nutrihub </h2>

              <p>
                Nutrihub India Pvt.ltd strongly believe in 3 main keys for
                unlocking natural plant potential they are
              </p>

              <ul>
                <li>Integrated Crop Nutrition Management</li>
                <li>Managing Crop Stress</li>
                <li>Soil Health</li>
              </ul>

              <p>
                he foundation for Nutrihub India Pvt. Ltd. was laid in 2019 by
                passionate directors with motive of uplifting farmers life by
                doubling farmers income by providing innovative nutrition
                products and technical services to growers for growing healthy
                crop.
              </p>
            </div>

            <div className="right">
              <div className="img">
                <img src={Image} alt="" />
              </div>
            </div>
          </div>

          <div className="slider-content">
            <Slider {...settings}>
              <div className="single-card">
                <div className="card-header">
                  <img src={Vision} alt="" />
                </div>
                <div className="card-body">
                  <p>
                    NutriHub envisions a world where agriculture thrives
                    sustainably, nourishing both people and the planet,To become
                    a leader in agriculture sector in providing Total
                    Nutrisolutions to farmers
                  </p>
                </div>
              </div>

              <div className="single-card">
                <div className="card-header">
                  <img src={Mission} alt="" />
                </div>
                <div className="card-body">
                  <p>
                    Manufacturing and bringing world's best products to India
                    for providing sustainable and holistic solutions to the
                    Growers that enhance crop performance and Unlock natural
                    plant Potential without harming environment
                  </p>
                </div>
              </div>
            </Slider>
          </div>

          <div className="sec-2">
            <h1>Our Values</h1>
            <div className="card-container">
              {cards.map((val, i) => {
                return (
                  <div className="card card-hover">
                    <img src={val.src} alt="" />
                    <h2>{val.head}</h2>
                    <p>{val.para}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="sec-3">
            <div className="left">
              <div className="box">
                <h1>25</h1>
                <h2>YEARS</h2>
                <h3>EXPERIENCE</h3>
              </div>
            </div>
            <div className="right">
              <h1>
                We can handle everything <mark> for you!</mark>
              </h1>

              <p>
                The foundation for Nutrihub India Pvt. Ltd. was laid in 2019 by
                passionate directors with motive of uplifting farmers life by
                doubling farmers income by providing innovative nutrition
                products and technical services to growers for growing healthy
                crop.
              </p>

              <div className="record">
                <div className="single-record">
                  <h1>250</h1>
                  <h2>Total Employees</h2>
                </div>

                <div className="single-record">
                  <h1>5000</h1>
                  <h2>Satisfied Farmers</h2>
                </div>

                <div className="single-record">
                  <h1>3569</h1>
                  <h2>Expert Gardeners</h2>
                </div>
              </div>
            </div>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            // height="100"
            style={{
              width: "100%",
              display: "block",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
              overflow: "hidden",
              height: "70px",
              backgroundColor: "#f5f1ed",
              marginBottom: "25px",
            }}>
            <path
              className="elementor-shape-fill"
              style={{ fill: "#fff" }}
              d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0"></path>
          </svg>
        </div>
      </Layout>
    </>
  );
}

export default About;
