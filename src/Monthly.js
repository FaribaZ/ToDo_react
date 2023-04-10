import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import useFetch from "./useFetch";

const Monthly = () => {
  const { items, loading, error } = useFetch("http://localhost:8000/items");
  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>Somthing went wrong</div>}
      {items && (
        <ItemList
          items={items.filter((item) => item.interval === "Monthly")}
          title={`Monthly`}
        />
      )}
    </div>
  );
};

export default Monthly;
