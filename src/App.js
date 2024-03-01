import "./App.css";
import PlatfromLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import AddNewBoardModal from "./components/AddNewBoardModal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [boardCount, setBoardCount] = useState(3);
  const [navLink, setNavLink] = useState([
    { name: "Platform Launch", to: "/" },
    { name: "Marketing Plan", to: "/marketing-plan" },
    { name: "Roadmap", to: "/roadmap" },
  ]);
  const [newLink, setNewLink] = useState("");

  function handleShowFormClick() {
    setShow(true);
  }

  function handleHideFormClick() {
    setShow(false);
  }

  function handleBoardCount() {
    setBoardCount((prevCount) => prevCount + 1);
  }

  function handleAddLink() {
    const linkName = newLink.replace(/\s+/g, "-");
    const link = {
      name: newLink,
      to: `/${linkName}`,
    };
    setNavLink([...navLink, link]);
  }

  function handleLinkName(event) {
    setNewLink(event.target.value);
  }

  return (
    <div className="App">
      <Router>
        <Navbar
          handleShowFormClick={handleShowFormClick}
          boardCount={boardCount}
          navLink={navLink}
        />

        <Routes>
          <Route path="/" element={<PlatfromLaunch />} />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <AddNewBoardModal
          show={show}
          handleHideFormClick={handleHideFormClick}
          handleBoardCount={handleBoardCount}
          handleAddLink={handleAddLink}
          handleLinkName={handleLinkName}
        />
      </Router>
    </div>
  );
}

export default App;
