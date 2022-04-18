import { useState, useEffect } from 'react';


export const useWildfireData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "http://localhost:8081/api/data/wildfire")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


