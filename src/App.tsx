import React, { useState } from "react";
import Map from "./components/Map/Map";
import Newslist from "./components/News/Newslist";
import Header from "./components/Header/Header";
import "./App.css";
import { Grid } from "@material-ui/core";
import { useSelector, useStore } from "react-redux";
import Bottom from "./components/Bottom/Bottom";
import { LeftDrawer } from "./components/Drawer/LeftDrawer";

function App() {
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);
  const category = useSelector(() => store.getState().categoryReducer.country);

  return (
    <div>
      <Header />
      <Bottom category={category} country={country}/>
      <Grid container>
{/*        {country ?<Grid item  xs={12} sm={12} md={12} lg={12}  xl={3}  >
          <Newslist country={country} />   
        </Grid> :null
        }  */}
        <Grid item  xs={12} sm={12} md={12} lg={12} xl={9} >
          <Map />
        </Grid>
      </Grid>
 
    </div>
  
  )
}

export default App;
