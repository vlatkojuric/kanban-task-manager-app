import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ handleShowFormClick }) {
  return (
    <nav className="navbar">
      <p>All Boards(X)</p>
      <Link to="/">Platform Launch </Link>
      <Link to="/marketing-plan">Marketing Plan </Link>
      <Link to="/roadmap">Roadmap </Link>
      <button onClick={handleShowFormClick}>+ Create new board</button>
    </nav>
  );
}
