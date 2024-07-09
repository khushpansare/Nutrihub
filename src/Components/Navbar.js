import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

//
import Logo from "../Assets/anand_logo.png";

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <img src={Logo} alt="" />
      </h1>
      <ul
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/r_and_d">R & D</Link>
        </li>
        <li className="dropdown">
          <Link to="#" className="dropbtn">
            division
          </Link>
          <div className="dropdown-content">
            <Link to="/services/service1">Service 1</Link>
            <Link to="/services/service2">Service 2</Link>
            <Link to="/services/service3">Service 3</Link>
          </div>
        </li>
        <li>
          <Link to="/products">Product</Link>
        </li>
        <li>
          <Link to="/probiotics">ProBiotics</Link>
        </li>
        <li>
          <Link to="/gallary">Gallary</Link>
        </li>
        <li>
          <Link to="/career">Career</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <ul className="nav-static-item">
        <li>
          <ShoppingCartIcon />
        </li>
        <li>
          <SearchIcon />
        </li>
      </ul>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobile ? <>&#10005;</> : <>&#9776;</>}
      </button>
    </nav>
  );
}

export default Navbar;
