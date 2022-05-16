import { useState, useEffect } from 'react';


export const useMoneyData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://immense-inlet-95240.herokuapp.com/api/data/money")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};

export const useMoneyAverage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      "https://immense-inlet-95240.herokuapp.com/api/data/money/average")
                  .then((res) => res.json())
                  .then((json) => {
                      setData({
                          items: json,
                      });
                  })
  }, []);
  return data;
};


