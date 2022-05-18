import React from "react";
import Carousel from "react-material-ui-carousel";
import "../components/Header/Header.css";
import { useNewsData } from "../hooks/useNewsData";
import { Grid } from "@mui/material";
import { useSelector, useStore } from "react-redux";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

function Screen() {
  const store = useStore();
  const newsData: any = useNewsData();
  const category = useSelector(() => store.getState().categoryReducer.category);

  var categories: any[] = [];
  if (newsData && category) {
    newsData.items.map((data: { category: any }) => {
      if (data.category === category) {
        return categories.push(data);
      }
    });
  }

  /*   const activeCountries = newsData.filter((news: { isActive: boolean; }) => news.isActive == true);
  const filteredCountries = newsData.filter(
    (news: { country: string; }) => news.country === "germany"
  );
  const activeFilteredCountries = newsData.filter(
    (news: { category: any; }) => news.category === category
  ); */

  return (
    <Carousel className="carousel" autoPlay={false}>
      {categories.map(
        (
          item: {
            image: string | undefined;
            headline:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
            content:
              | boolean
              | React.ReactChild
              | React.ReactFragment
              | React.ReactPortal
              | null
              | undefined;
          },
          i: any
        ) => (
          <Card sx={{ maxWidth: 345 }}  style={{maxHeight: 400, overflow: 'auto' ,border: "none", boxShadow: "none"}}>
            <CardMedia
              component="img"
              height="140"
              image={item.image}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.headline}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {item.content}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        )
      )}
    </Carousel>
  );
}

export default Screen;
