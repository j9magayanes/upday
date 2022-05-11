import React from "react";
import "./Header.css";
import { Grid } from "@material-ui/core";
import SearchBar from "../Search/SearchBar";
import Logo from "../../assets/images/logo.png";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    
    <div className="header">
      <div><h3 className="header">Globe News</h3></div>
      <div className="search-bar"><SearchBar/></div>
    </div>
   
  );
}

export default Header;
