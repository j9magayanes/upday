import { useState, useEffect } from 'react';


export const useEarthquakeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:8081/api/data/money")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};

export const useEarthquakeAverage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:8081/api/data/money/average")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


