import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./Header.css";
import { Grid } from "@material-ui/core";
import { useNewsData } from "../useNewsData";
import { useDispatch, useSelector, useStore } from "react-redux";

function News() {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();
  const newsData: any = useNewsData();

  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);

  /* const countries = newsData
  const activeCountries = newsData.filter(news => news.isActive == true)
  const filteredCountries = newsData.filter(news => news.country === "germany")
  const activeFilteredCountries = newsData.filter(news => (news.country === country && news.category === category))
 */

  var categories: any[] = [];
  if (newsData && category) {
    newsData.items.map((data: { category: any; country: any }) => {
      if (data.category === category && data.country == country) {
        return categories.push(data);
      }
    });
  }

  return (
    <div className="news" >
      {categories.map((news) => (
        <Grid container className="newsList">
          <Grid item md={3} xs={1}>
            <div>
              <img className="newsListImage" src={news.image}></img>
            </div>
          </Grid>
          <Grid item md={9} xs={11}>
            <div className="newsListContents">
              <p className="newsListHeadline">{news.headline}</p>
              <p className="newsListContent">
                {news.content.substring(0, 150)}...
              </p>
            </div>
          </Grid>
        </Grid>
      ))}
    </div>
  );
}

export default News;
