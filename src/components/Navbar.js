import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <Link to="/">Platform Launch </Link>
      <Link to="/marketing-plan">Marketing Plan </Link>
      <Link to="/roadmap">Roadmap </Link>
    </div>
  );
}
