import { useSelector, useStore } from "react-redux";
import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { Drawer, Box, Typography, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Search from "../Search/Search";
import News from "../News/News";

function Bottom(_props: any) {
  const [value, setValue] = useState("Map");
  const store = useStore();
  const country = useSelector(() => store.getState().countryReducer.country);
  const category = useSelector(() => store.getState().categoryReducer.category);
  const countryString = country.toString();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <BottomNavigation
      showLabels
      value={1}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Newsfeed"  onClick={() => setIsDrawerOpen(true)} />
      <BottomNavigationAction label="Map" />
      <Drawer anchor='left' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
      <Box p={2} width="300px" textAlign='center' role='presentation'>
        <Typography variant='h6' component='div'>
        {/* <p>{category  ? "AVERAGE DATA ON " + category.toUpperCase() : "NO DATA AVAILABLE"}</p> */}
        <p>{category  && country ? "NEWS ABOUT " + category.toUpperCase()  + " IN " + country.toUpperCase() : "No news available"}</p>
        <News/>
        </Typography>
      </Box>
    </Drawer>
    </BottomNavigation>
  );
}

export default Bottom;
