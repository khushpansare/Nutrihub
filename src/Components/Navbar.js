import React from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../Assets/anand_logo.png";

// MUI Component
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import MobileNavBar from "../mobile_view/MobileNavBar";

function NavBar() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const { pathname } = useLocation();

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className="container-fluid navbar">
      <div className="logo">
        <Link className={`${isActive("/") ? "active1" : ""}`} to="/">
          <img src={Logo} alt="" width="60px" />
        </Link>
      </div>

      {/* <div className="nav"> */}
      <ul className="nav-ul">
        <li className="cool-link active1">
          <Link className={`${isActive("/") ? "active1" : ""}`} to="/">
            Home
          </Link>
        </li>
        <li className="cool-link active1">
          <Link
            className={`${isActive("/about") ? "active1" : ""}`}
            to="/about">
            About us
          </Link>
        </li>
        <li className="dropdown cool-link">
          <Link
            className={`${isActive("/products") ? "active1" : ""}`}
            to="/products">
            Products <KeyboardArrowDownIcon sx={{ fontSize: "17px" }} />
          </Link>
          <div className="dropdown-content">
            <Link to="/courses/foundation/alpha-foundation">
              {" "}
              Hands-on Training
            </Link>

            <Link to="/courses/medical_coding">Medical Coding</Link>

            <Link to="/courses/pharmcovigilance">PharmCovigilance</Link>
          </div>
        </li>
        <li className="cool-link">
          <Link
            className={`${isActive("/gallary") ? "active1" : ""}`}
            to="/gallary">
            Gallery
          </Link>
        </li>
        <li className="cool-link">
          <Link className={`${isActive("/blog") ? "active1" : ""}`} to="/blog">
            Blog
          </Link>
        </li>
        <li className="cool-link">
          <Link
            className={`${isActive("/contact") ? "active1" : ""}`}
            to="/contact">
            Contact
          </Link>
        </li>
      </ul>

      <div className="header-icons-group">
        <i
          onClick={() => window.open("https://www.facebook.com/RAPAnalytical")}>
          <FontAwesomeIcon icon={faFacebookF} />
        </i>
        <i
          onClick={() =>
            window.open("https://www.instagram.com/rapanalytical/")
          }>
          <FontAwesomeIcon icon={faInstagram} />
        </i>

        <i>
          <div className="responsive-navbar">
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuIcon sx={{ color: "black", fontSize: "21px" }} />
            </IconButton>
          </div>
        </i>
      </div>
      {/* </div> */}

      {/* <Button onClick={toggleDrawer("right", true)}>Right</Button> */}

      <MobileNavBar toggleDrawer={toggleDrawer} state={state} />
    </div>
  );
}

export default NavBar;
