import { Link } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <p>All Boards(X)</p>
      <Link to="/">Platform Launch </Link>
      <Link to="/marketing-plan">Marketing Plan </Link>
      <Link to="/roadmap">Roadmap </Link>
      <p>+ Create new board</p>
    </nav>
  );
}
