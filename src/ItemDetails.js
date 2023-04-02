import { useParams } from "react-router-dom";
const ItemDetails = () => {
  const { id } = useParams();
  return (
    <div className="detailes">
      <h1>item details - {id}</h1>
    </div>
  );
};

export default ItemDetails;
