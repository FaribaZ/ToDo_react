import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
const ItemDetails = () => {
  const { id } = useParams();
  const { items, loading, error } = useFetch(
    `http://localhost:8000/items${id}`
  );
  return (
    <div className="detailes">
      {loading && <div> Is loading...</div>}
      {error && <div>Somthing went wrong!</div>}
      {items && (
        <article>
          <h2>{items.title}</h2>
          <h3>{items.interval}</h3>
          <p>{items.body}</p>
        </article>
      )}
    </div>
  );
};

export default ItemDetails;
