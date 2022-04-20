import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useSelector, useStore } from "react-redux";
import './Header.css';



function Search(_props: any){
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);
  const countryString = country.toString()
    return (
     country ?  <div className="search">NEWS IN {countryString.toUpperCase()} </div> : null 
    )
  }

export default Search;