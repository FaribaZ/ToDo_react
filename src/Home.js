import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useFetch from "./useFetch";

const Home = () => {
  const { items, loading, error } = useFetch("http://localhost:8000/items");
  // const handleDelet = (id) => {
  //   const newItems = items.filter((item) => item.id !== id);
  //   setItem(newItems);
  // };

  return (
    <div className="home">
      {loading && <div>Loading the data</div>}
      {error && <div>{error}</div>}
      {/* {items && (
        <ItemList
          items={items}
          title={`Fariba's TODO List!`}
          //   handleDelet={handleDelet}
        />
      )} */}
      {items && (
        <ItemList
          items={items.filter((item) => item.interval === "Daily")}
          title={`Daily`}
          //   handleDelet={handleDelet}
        />
      )}
    </div>
  );
};

export default Home;
