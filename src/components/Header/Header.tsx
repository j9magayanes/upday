import React from "react";
import "./Header.css";
import SearchBar from "../Search/SearchBar";

function Header() {
  return (
    
    <div className="header">
      <div><h3 className="header">Globe News</h3></div>
      <div className="search-bar"><SearchBar/></div>
    </div>
   
  );
}

export default Header;
