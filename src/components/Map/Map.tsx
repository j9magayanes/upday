import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup,   Circle, } from "react-leaflet";
import "./Map.css";
import Screen from "../Screen";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { ADD_COUNTRY, } from "../../actionCreators";
import { Button } from "@mui/material";
import { categoryReducer, dataReducer } from "../../rootReducer";
import { useCarbonData } from "../../useCarbonData";
import { useWildfireData } from "../../useWildfireData";
import { useEarthquakeData, useEarthquakeAverage } from "../../useEarthquakeData";
import { constants } from "os";
import { useNewsData } from "../../useNewsData";


function Map() {
  const dispatch = useDispatch();
  const store = useStore();
  const category = useSelector(() => store.getState().categoryReducer.category);
  const carbonData: any = useCarbonData();
  const newsData: any = useNewsData();
  const wildfireData: any = useWildfireData();
  const earthquakeData: any = useEarthquakeData();
  const carbonAverage: any = 229.92;
  const wildfireAverage: any = 325.73;
  const moneyAverage = 124.45;
  const datas: { long: any; lat: any; value1: any }[] = []
  const [country, setCountry] = useState("");

  var categories: any[] = []

  let average: number 
  if(category){
    switch (category) {
      case 'carbon':
        average = carbonAverage;
        break;
      case 'wildfire':
        average = wildfireAverage;
        break;
      case 'earthquake':
        average = moneyAverage;
        break;
      default:
        console.log("no category");
    }
  }


  if(newsData && category  ) {
    newsData.items.map((data: { category: any; })=> {
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

if(earthquakeData && (category === "earthquake")  ) {
  earthquakeData.items.map((data: { long: any; lat: any; value1: any  })=> {
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
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        noWrap={true}
        minZoom={2} />
      {datas.map((news) => (
        <Circle center={[news.lat,news.long]} color={news.value1 <= (average /2) ? "green" : (3*(average / 2)) >  news.value1 ? "red"  : "yellow"} radius={category === "earthquake" ? 20000 : 200000}></Circle>
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
          <Popup className="popUp">
            <Screen />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

function mapStateToProps(state: { country: string }) {
  const { country } = state;
  return { country: state.country };
}

export default connect(mapStateToProps)(Map);
function news(news: any): string | JSX.Element | React.ReactNode[] | JSX.Element[] {
  throw new Error("Function not implemented.");
}

function dispatch(arg0: { type: string; country: string; }) {
  throw new Error("Function not implemented.");
}
