import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import AddIcon from "@mui/icons-material/Add";

export default function Navbar({ handleShowFormClick, boardCount }) {
  return (
    <nav className="navbar">
      <p>All Boards({boardCount})</p>
      <Link to="/">Platform Launch </Link>
      <Link to="/marketing-plan">Marketing Plan </Link>
      <Link to="/roadmap">Roadmap </Link>
      <button onClick={handleShowFormClick}>
        <AddIcon /> Create new board
      </button>
    </nav>
  );
}
