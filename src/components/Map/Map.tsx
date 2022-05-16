import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup,   Circle, } from "react-leaflet";
import "./Map.css";
import Screen from "../Screen";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { ADD_COUNTRY, } from "../../actions/actionCreators";
import { useCarbonData } from "../../hooks/useCarbonData";
import { useWildfireData } from "../../hooks/useWildfireData";
import { useMoneyData } from "../../hooks/useMoneyData";
import { useNewsData } from "../../hooks/useNewsData";


function Map() {
  const dispatch = useDispatch();
  const store = useStore();
  const category = useSelector(() => store.getState().categoryReducer.category);
  const carbonData: any = useCarbonData();
  const newsData: any = useNewsData();
  const moneyData: any = useMoneyData();
  const wildfireData: any = useWildfireData();
  const carbonAverage: any = 229.92;
  const wildfireAverage: any = 325.73;
  const moneyAverage = 124.45;
  const datas: { long: any; lat: any; value1: any }[] = []

  var categories: any[] = []

  let average: number = 0
  if(category){
    switch (category) {
      case 'carbon':
        average = carbonAverage;
        break;
      case 'wildfire':
        average = wildfireAverage;
        break;
      case 'money':
        average = moneyAverage;
        break;
      default:
        console.log("no category");
    }
  }

  console.log(category)
console.log(average)


  if(newsData && category  ) {
    newsData.items.map((data: { category: any; }) => {
    if (data.category === category) {
      return categories.push(data);
    }
  })} 

if(carbonData && (category === "carbon")  ) {
  carbonData.items.map((data: { long: any; lat: any;value1: any  })=> {
  return datas.push(data);
})} 

if(wildfireData && (category === "wildfire")  ) {
  wildfireData.items.map((data: { long: any; lat: any;value1: any  })=> {
  return datas.push(data);
})} 

if(moneyData && (category === "money")  ) {
  moneyData.items.map((data: { long: any; lat: any; value1: any  })=> {
  return datas.push(data);
})} 

 function handleOnClick(country: string) {
    dispatch({
      type: ADD_COUNTRY,
      country: country,
    });
  }

  useEffect(() => {
  }, [store.getState().categoryReducer.category]);



  return (
  <MapContainer
      center={[51.505, -0.09]}
      zoom={4}
      maxZoom={10}
      maxBounds={[
        [-90, -180],
        [90, 180],
      ]}
      bounceAtZoomLimits={false}
    >

 {/* L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
	subdomains: 'abcd',
	minZoom: 0,
	maxZoom: 20,
	ext: 'png'
}); */}

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
        subdomains= 'abcd'
        noWrap={true}
        minZoom={2}
        maxZoom={20} />
      {datas.map((news) => (
        <Circle center={[news.lat,news.long]} 
        stroke={false}
        fillOpacity={0.25}
        color={news.value1 <= (average /2) ? "green" : (3*(average / 2)) >  news.value1 ? "red"  : "yellow"}
         radius={category === "money" ? 20_000 : 80_000} />


      ))}
      {categories.map((news: { _id: React.Key | null | undefined; lat: number; long: number; country: any; value1: any }) => (
     <Marker
          key={news._id}
          position={[news.lat,news.long]}
          eventHandlers={{
            click: () => {
              dispatch({
                type: ADD_COUNTRY,
                country: news.country,
              });
            },
          }}
        >
          <Popup keepInView={true} className="popUp">
            <Screen />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function mapStateToProps(state: { country: string }) {
  return { country: state.country };
}

export default connect(mapStateToProps)(Map);
function news(news: any): string | JSX.Element | React.ReactNode[] | JSX.Element[] {
  throw new Error("Function not implemented.");
}

function dispatch(arg0: { type: string; country: string; }) {
  throw new Error("Function not implemented.");
}

