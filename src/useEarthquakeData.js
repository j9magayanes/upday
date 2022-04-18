import { useState, useEffect } from 'react';


export const useEarthquakeData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:8081/api/data/earthquake")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


