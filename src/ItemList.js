import { Link } from "react-router-dom";
const ItemList = ({ items, title, handleDelet }) => {
  //   const items = props.items;
  //   const title = props.title;
  return (
    <div className="item-list">
      <h1>{title}</h1>
      {items.map((item) => (
        <div className="list-preview" key={item.id}>
          <Link to={`/ItemList/${item.id}`}>
            <h2>{item.title}</h2>
            <p>{item.body} </p>
            <h4>{item.interval}</h4>
          </Link>
          {/* <button className="button" onClick={() => handleDelet(item.id)}>
            Delet
          </button> */}
        </div>
      ))}
    </div>
  );
};

export default ItemList;
