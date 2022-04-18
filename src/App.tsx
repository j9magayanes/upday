import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Map from "./components/Map";
import Newslist from "./components/Newslist";
import Header from "./components/Header";
import Screen from "./components/Screen";
import './App.css';
import { Grid } from '@material-ui/core';
import { useSelector, useStore } from "react-redux";
import { useCarbonData } from './useCarbonData';



function App() {
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);

  return (
  <div>
  <Header/>
  <Grid container>
        <Grid item xs={3} >
        <Newslist country={country} />
        </Grid>
        <Grid item xs={9} >
        <Map />
        </Grid>
  </Grid>
  </div>
  )
}

export default App;
