import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";
const ItemDetails = () => {
  const { id } = useParams();
  const { items, loading, error } = useFetch(
    `http://localhost:8000/items/${id}`
  );
  const history = useHistory();
  const handleClick = () => {
    fetch(`http://localhost:8000/items/${id}`, {
      method: "DELETE",
    }).then(() => {
      history.push("/");
    });
  };
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
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default ItemDetails;
