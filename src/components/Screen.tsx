import React from "react";
import Carousel from "react-material-ui-carousel";
import "../components/Header/Header.css";
import { useNewsData } from "../hooks/useNewsData";
import { useSelector, useStore } from "react-redux";

function Screen() {
  const store = useStore();
  const newsData: any = useNewsData();
  const category = useSelector(() => store.getState().categoryReducer.category);

  const categories: any[] = [];
  if(newsData && category  ) {
    newsData.items.forEach((data: { category: any; })=> {
    if (data.category === category) {
       categories.push(data);
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
              <img className="screenImage" src={item.image} alt=""></img>
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
