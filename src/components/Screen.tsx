import React from "react";
import Carousel from "react-material-ui-carousel";
import "../components/Header/Header.css";
import { useNewsData } from "../hooks/useNewsData";
import {  Grid } from "@mui/material";
import { useSelector, useStore } from "react-redux";

function Screen() {
  const store = useStore();
  const newsData: any = useNewsData();
  const category = useSelector(() => store.getState().categoryReducer.category);

  var categories: any[] = []
  if(newsData && category  ) {
    newsData.items.map((data: { category: any; })=> {
    if (data.category === category) {
      return categories.push(data);
    }
  })} 

/*   const activeCountries = newsData.filter((news: { isActive: boolean; }) => news.isActive == true);
  const filteredCountries = newsData.filter(
    (news: { country: string; }) => news.country === "germany"
  );
  const activeFilteredCountries = newsData.filter(
    (news: { category: any; }) => news.category === category
  ); */

  return (
    <Carousel className="carousel" autoPlay={false}>
      {categories.map((item: { image: string | undefined; headline: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, i: any) => (
            <Grid container>
            <Grid item  lg={7}  md ={12} sm={12} xs={12} >
                <img className="carouselImage" src={item.image}></img>
            </Grid>
            <Grid item lg={5} md ={12}   sm={12} xs={12}  className="carouselContents">
                <p className="carouselHeadline">{item.headline}</p>
                <p className="carouselContent">
                  {item.content}
                </p>
            
            </Grid>
          </Grid>
      ))}
    </Carousel>
  );
}

export default Screen;
