import React from "react";
import "./Header.css";
import { Grid } from "@material-ui/core";
import SearchBar from "../Search/SearchBar";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <Grid container className="background">
      <Grid>
        <img className="logo" src={Logo} alt=" "></img>
      </Grid>
      <Grid item xs={6}  md={9}>
        <h1 className="header">Globe News</h1>
      </Grid>
      <Grid item xs={3} md={2}>
        <SearchBar />
      </Grid>
    </Grid>
  );
}

export default Header;
