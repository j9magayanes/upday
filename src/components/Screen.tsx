import React, { useState } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./Header.css";
import { useNewsData } from "../useNewsData";
import { useDispatch, useSelector, useStore } from "react-redux";

function Screen() {
  const dispatch = useDispatch();
  const store = useStore();
  const state = useState();
  const newsData: any = useNewsData();

  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);


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
    <Carousel>
      {categories.map((item: { image: string | undefined; headline: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; content: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, i: any) => (
        <div className="screen">
            <div>
              <img className="screenImage" src={item.image}></img>
            </div>
            <div>
              <p className="headline">{item.headline}</p>
            </div>
            <div>
              <p className="newsContent">{item.content}</p>
            </div>
          </div>
      ))}
    </Carousel>
  );
}

export default Screen;
