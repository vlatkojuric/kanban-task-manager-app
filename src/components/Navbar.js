import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import AddNewTask from "../assets/AddNewTask";
import LogoLight from "../assets/LogoLight";

export default function Navbar({ handleShowFormClick, boardCount, navLink }) {
  return (
    <nav className="navbar">
      <div className="navbar_elements">
        <span className="logo_navbar">
          <LogoLight />
          <h3>ZenDo</h3>
        </span>
        <p>All Boards({boardCount})</p>

        {navLink.map((link) => (
          <Link key={link.to} to={link.to} className="navbar_links">
            {link.name}
          </Link>
        ))}
        <div className="button_nav_container">
          <button className="navbar_button" onClick={handleShowFormClick}>
            <AddNewTask /> Create new board
          </button>
        </div>
      </div>
      <div>
        <span className="hide_bar">hide bar</span>
      </div>
    </nav>
  );
}
