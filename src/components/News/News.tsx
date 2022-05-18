import React, { useState } from "react";
import "../Header/Header.css";
import { Grid } from "@material-ui/core";
import { useNewsData } from "../../hooks/useNewsData";
import { useSelector, useStore } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function News() {
  const store = useStore();
  const newsData: any = useNewsData();
  const category = useSelector(() => store.getState().categoryReducer.category);
  const country = useSelector(() => store.getState().countryReducer.country);

  const categories: any[] = [];
  if (newsData && category) {
    newsData.items.forEach((data: { category: any; country: any }) => {
      if (data.category === category && data.country === country) {
        categories.push(data);
      }
    });
  }

  return (
    <div className="news">
      {categories.map((news) => (
        <Card sx={{ maxWidth: 300, border: "none", boxShadow: "none", margin: "1px" }} >
          <CardMedia component="img" height="200" image={news.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {news.headline}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {news.content.substring(0, 150)}...
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}

export default News;
