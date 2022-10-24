import React, { useState } from "react"; 
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import AppsIcon from "@mui/icons-material/Apps";
import NotificationsIcon  from "@mui/icons-material/Notifications";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
  const [inputSearch, setInputSearch] = useState("");

  return (
    <>
    <div className="header">
      <div className="header__left">
      {/* <h1>it is a header</h1> */}
      <MenuIcon />
      <Link to="/">
          <img  
      className="header__logo" 
      src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" 
      alt="" />
      </Link>
      </div>

      <div className="header__input">
      <input onChange={e=> setInputSearch(e.target.value)} value={inputSearch} type="text"  placeholder="  Search.."/>
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className="header__searchButton" />
      </Link>
      </div>

      <div className="header__icons">
      <VideoCallIcon  className="header__icon"/>
      <AppsIcon className="header__icon"/>
      <NotificationsIcon className="header__icon"/>
      <Avatar 
      alt="Mirkhalikov Asadbek"
      src="https://avatars.githubusercontent.com/u/100999096?s=400&u=3f3b73eee88623232813eaba2b067c204b9fcfd3&v=4"
      />
      </div>
    </div>
    </>
  );
} 

export default Header