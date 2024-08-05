import React from "react";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";

import Mobile_App_Img from "../Assets/footer/our-app.png";

function Footer_Main() {
  return (
    <>
      <div className="footer">
        <div className="sec-1">
          <div className="wrapper">
            <div className="content">
              <h2>Site Links</h2>
              <ul>
                <li>
                  <a href="">Home</a>
                </li>
                <li>
                  <a href="">About us</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">Contact</a>
                </li>
              </ul>
            </div>
            <div className="content">
              <h2>Contact us</h2>
              <div className="single-address">
                <div className="icon">
                  <LocationOnIcon />
                </div>
                <div className="text">
                  <h4>ADDRESS</h4>
                  <p>
                    Satyam Industrial Estate, Block No.19,
                    <br /> Gat no.591/1&529, Airport Road , Janori,
                    <br /> Tal : Dindori, Dist : Nashik (MH)-422206
                  </p>
                </div>
              </div>
              <div className="single-address">
                <div className="icon">
                  <CallIcon sx={{ marginTop: "8px" }} />
                </div>
                <div className="text">
                  <p>18002108987(24/7 Support Line)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="image-content">
              <img src={Mobile_App_Img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer_Main;
