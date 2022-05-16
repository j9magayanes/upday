import { useState, useEffect } from 'react';


export const useWildfireData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://immense-inlet-95240.herokuapp.com/api/data/wildfire")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


