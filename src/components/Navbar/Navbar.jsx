import React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
// import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar" style={{borderBottom:'1px solid lightgray'}}>
      <div className="left">
        <span>Social Media</span>
        <HomeOutlinedIcon />
        <DarkModeOutlinedIcon />
        <GridViewOutlinedIcon />
        <div className="search">
          <SearchOutlinedIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>

      <div className="right">
        <NotificationsOutlinedIcon />

        <div className="user">
          <img
            src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt="display"
          />
          <span> John Doe</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
