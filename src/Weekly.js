import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useFetch from "./useFetch";

const Weekly = () => {
  const { items, loading, error } = useFetch("http://localhost:8000/items");
  //   const handleDelet = (id) => {
  //     const newItems = items.filter((item) => item.id !== id);
  //     setItem(newItems);
  //   };

  return (
    <div className="week">
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
          items={items.filter((item) => item.interval === "Weekly")}
          title={`Weekly`}
          //   handleDelet={handleDelet}
        />
      )}
    </div>
  );
};
export default Weekly;
