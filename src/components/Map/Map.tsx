import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Circle } from "react-leaflet";
import "./Map.css";
import Screen from "../Screen";
import { connect, useDispatch, useSelector, useStore } from "react-redux";
import { ADD_COUNTRY } from "../../actions/actionCreators";
import { useCarbonData } from "../../hooks/useCarbonData";
import { useWildfireData } from "../../hooks/useWildfireData";
import { useEarthquakeData } from "../../hooks/useEarthquakeData";
import { useNewsData } from "../../hooks/useNewsData";

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
  const datas: { long: any; lat: any; value: any }[] = [];

  const categories: any[] = [];

  type CategoryConfiguration = {
    average: number;
    opacity: number;
    radius: number;
    data: {
      items: Array<any>;
    };
  };

  function getData(category: string): CategoryConfiguration {
    switch (category) {
      case "":
        return { average: 0, data: { items: [] }, radius: 0, opacity : 0.25 };
      case "carbon":
        return { average: carbonAverage, data: carbonData, radius: 200_000, opacity : 0.25 };
      case "wildfire":
        return { average: wildfireAverage, data: wildfireData, radius: 15000, opacity: 0.25 };
      case "earthquake":
        return { average: moneyAverage, data: earthquakeData, radius: 20_000, opacity: 0.25 };
      default:
        throw new Error(`unknown category "${category}"`);
    }
  }

  const { average, data, radius,  opacity 
  } = getData(category);

  if (newsData && category) {
    newsData.items.forEach((data: { category: any }) => {
      if (data.category === category) {
        categories.push(data);
      }
    });
  }

  data.items.map((data: { long: any; lat: any; value: any }) => {
    return datas.push(data);
  });

  useEffect(() => {}, [store.getState().categoryReducer.category]);

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
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        noWrap={true}
        minZoom={2}
        maxZoom={20}
      />

      {datas.map((news) => (
        <Circle
          center={[news.lat, news.long]}
          stroke={false}
          fillOpacity={opacity}
          color={
            news.value <= average / 2
              ? "green"
              : 3 * (average / 2) > news.value
              ? "red"
              : "yellow"
          }
          radius={radius}
        />
      ))}

      {categories.map(
        (news: {
          _id: React.Key | null | undefined;
          lat: number;
          long: number;
          country: any;
          value: any;
        }) => (
          <Marker
            key={news._id}
            position={[news.lat, news.long]}
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
        )
      )}
    </MapContainer>
  );
}

function mapStateToProps(state: { country: string }) {
  return { country: state.country };
}

export default connect(mapStateToProps)(Map);
function news(
  news: any
): string | JSX.Element | React.ReactNode[] | JSX.Element[] {
  throw new Error("Function not implemented.");
}

function dispatch(arg0: { type: string; country: string }) {
  throw new Error("Function not implemented.");
}
