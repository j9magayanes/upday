import React from "react";
import "./Header.css";
import SearchBar from "../Search/SearchBar";

function Header() {
  return (
    
    <div className="header">
      <div className="brand"> 
        <div className="upday"><h3>News Globe</h3></div> 
        <div className="upday"><h6>powered by upday</h6></div>
      </div>
      <div className="search-bar"><SearchBar/></div>
    </div>
   
  );
}

export default Header;
