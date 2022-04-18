import { useState, useEffect } from 'react';

export const useNewsData = () => {
    const [data, setData] = useState(null);
  
    useEffect(() => {
      fetch(
        "http://localhost:8081/api/news/all")
                    .then((res) => res.json())
                    .then((json) => {
                        setData({
                            items: json,
                        });
                    })
    }, []);
    return data;
  };
  
  