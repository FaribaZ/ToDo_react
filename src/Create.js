import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [interval, setInterval] = useState();
  const [pending, setPending] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { title, body, interval };
    setPending("true");
    fetch("http://localhost:8000/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    }).then(() => {
      console.log("Item added");
      setPending("false");
    });
  };
  return (
    <div className="create">
      <h2>Add new one!</h2>
      <form onSubmit={handleSubmit}>
        <label>Title: </label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label> Body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Interval</label>
        <select value={interval} onChange={(e) => setInterval(e.target.value)}>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
        </select>
        {!pending && <button>Add item</button>}
        {pending && <button disabled>Adding item...</button>}
      </form>
    </div>
  );
};

export default Create;
