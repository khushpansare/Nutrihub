import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function NavBar({ toggleDrawer, state }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorE2, setAnchorE2] = useState(null);

  const open = Boolean(anchorEl);
  const open2 = Boolean(anchorE2);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorE2(null);
  };

  const abouthandleClick = (event) => {
    setAnchorE2(event.currentTarget);
  };

  return (
    <>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
        sx={{
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: "250px",
          },
        }}>
        <List className="ul">
          <IconButton
            sx={{ float: "right", paddingRight: "15px" }}
            onClick={toggleDrawer("right", false)}>
            <CloseIcon sx={{ color: "#8cb13d", fontSize: "35px" }} />
          </IconButton>
          <Divider />
          <ListItem>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/"
                className="m-link"
                style={{ color: "black", textDecoration: "none" }}>
                Home
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/about"
                className="m-link"
                style={{ color: "black", textDecoration: "none" }}>
                About us
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton onClick={handleClick}>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/products"
                style={{ color: "black", textDecoration: "none" }}>
                Product <KeyboardArrowDownIcon />
              </Link>
            </ListItemButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/courses/foundation"
                  style={{ color: "black", textDecoration: "none" }}>
                  Foundation Course
                  <ChevronRightIcon sx={{ fontSize: "17px" }} />
                </Link>
              </MenuItem>

              <MenuItem onClick={handleClose}>
                <Link
                  to="/courses/regulatory_course"
                  style={{ color: "black", textDecoration: "none" }}>
                  Regulatory Course
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/courses/marcket_research"
                  style={{ color: "black", textDecoration: "none" }}>
                  Marcket Resaerch
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/courses/medical_coding"
                  style={{ color: "black", textDecoration: "none" }}>
                  Medical Coding
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link
                  to="/courses/pharmcovigilance"
                  style={{ color: "black", textDecoration: "none" }}>
                  PharmCovigilance
                </Link>
              </MenuItem>
            </Menu>
          </ListItem>{" "}
          <ListItem>
            <ListItemButton>
              {/* <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon> */}

              <Link
                to="/gallary"
                style={{ color: "black", textDecoration: "none" }}>
                Gallery
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link
                to="/blog"
                style={{ color: "black", textDecoration: "none" }}>
                Blog
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <Link
                to="/contact"
                style={{ color: "black", textDecoration: "none" }}>
                Contact
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}

export default NavBar;
