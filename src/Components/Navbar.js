import React, { useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";

//
import Logo from "../Assets/anand_logo.png";
import MobileNavbar from "./MobileNavbar";

function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">
        <img src={Logo} alt="" />
      </h1>
      <ul className={"nav-links"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>

        <li className="dropdown">
          <Link to="/products" className="dropbtn">
            Products
          </Link>
          <div className="dropdown-content">
            <Link to="/services/service1">Service 1</Link>
            <Link to="/services/service2">Service 2</Link>
            <Link to="/services/service3">Service 3</Link>
          </div>
        </li>

        <li>
          <Link to="/gallary">Gallary</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
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

      <MobileNavbar toggleDrawer={toggleDrawer} isDrawerOpen={isDrawerOpen} />
    </nav>
  );
}

export default Navbar;
