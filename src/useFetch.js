import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [items, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("couldnt fetch!");
          }
          return res.json();
        })
        .then((data) => {
          setItem(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }, 1000);
  }, [url]);
  return { items, loading, error };
};
export default useFetch;
