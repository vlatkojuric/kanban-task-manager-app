import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import AddIcon from "@mui/icons-material/Add";

export default function Navbar({ handleShowFormClick, boardCount, navLink }) {
  return (
    <nav className="navbar">
      <p>All Boards({boardCount})</p>

      {navLink.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.name}
        </Link>
      ))}
      <button onClick={handleShowFormClick}>
        <AddIcon /> Create new board
      </button>
    </nav>
  );
}
