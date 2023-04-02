import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>Fariba TODO list</h2>
      <div className="links">
        <Link to="/">Weekly</Link>
        <Link to="/">Mothly</Link>
      </div>
    </nav>
  );
};

export default Navbar;
