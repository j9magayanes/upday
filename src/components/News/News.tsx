import React, { useState } from "react";
import "../Header/Header.css";
import { Grid } from "@material-ui/core";
import { useNewsData } from "../../hooks/useNewsData";
import { useSelector, useStore } from "react-redux";

function News() {
  const store = useStore();
  const newsData: any = useNewsData();
  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);

  var categories: any[] = [];
  if (newsData && category) {
    newsData.items.forEach((data: { category: any; country: any }) => {
      if (data.category === category && data.country === country) {
        categories.push(data);
      }
    });
  }

  return (
    <div className="news" >
      {categories.map((news) => (
        <Grid container className="newsList">
          <Grid item  lg={3} xs={2} >
              <img className="newsListImage" src={news.image} alt=" "></img>
          </Grid>
          <Grid item lg={9} xs={10}  className="newsListContent">
              <p className="newsListHeadline">{news.headline}</p>
              <p className="newsListContent">
                {news.content.substring(0, 150)}...
              </p>
          
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default News;
