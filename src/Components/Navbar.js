import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../Assets/new_logo.png";

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
import axios from "axios";

function NavBar() {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    axios
      .get("https://nutrihubipl.com/admin/web-app/get_category_list.php")
      .then((res) => {
        setCategoryData(res.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const navigate = useNavigate();

  const handleNavigation = (data) => {
    // navigate(`/newPage/${id}`);
    navigate(`/products/${data.id}`, { state: { data: data } });
  };

  return (
    <div className="container-fluid navbar">
      <div className="logo">
        <Link className={`${isActive("/") ? "active1" : ""}`} to="/">
          <img src={Logo} alt="" width="120px" />
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
          <a
            type="button"
            className={`${isActive("/products") ? "active1" : ""}`}>
            Products <KeyboardArrowDownIcon sx={{ fontSize: "17px" }} />
          </a>
          <div className="dropdown-content">
            {categoryData.map((val, i) => {
              return (
                <a
                  onClick={() => handleNavigation(val)}
                  state={{ categoryName: val.value, categoryId: val.id }}>
                  {val.value}
                </a>
              );
            })}
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
          onClick={() =>
            window.open(
              "https://www.facebook.com/profile.php?id=100069296029300"
            )
          }>
          <FontAwesomeIcon icon={faFacebookF} />
        </i>
        <i
          onClick={() =>
            window.open("https://www.instagram.com/nutrihubindia/?hl=en")
          }>
          <FontAwesomeIcon icon={faInstagram} />
        </i>

        <i className="responsive-navbar">
          <div className="responsive-navbar">
            <IconButton onClick={toggleDrawer("right", true)}>
              <MenuIcon sx={{ color: "black", fontSize: "21px" }} />
            </IconButton>
          </div>
        </i>
      </div>
      {/* </div> */}

      {/* <Button onClick={toggleDrawer("right", true)}>Right</Button> */}

      <MobileNavBar
        toggleDrawer={toggleDrawer}
        state={state}
        categoryData={categoryData}
        handleNavigation={handleNavigation}
      />
    </div>
  );
}

export default NavBar;
