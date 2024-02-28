import "./App.css";
import PlatfromLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import AddNewBoardModal from "./components/AddNewBoardModal";
import Header from "./components/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [boardCount, setBoardCount] = useState(3);

  function handleShowFormClick() {
    setShow(true);
  }

  function handleHideFormClick() {
    setShow(false);
  }

  function handleBoardCount() {
    setBoardCount((prevCount) => prevCount + 1);
  }

  return (
    <div className="container">
      <div className="App">
        <Router>
          <Navbar
            handleShowFormClick={handleShowFormClick}
            boardCount={boardCount}
          />
          <Header />

          <Routes>
            <Route path="/" element={<PlatfromLaunch />} />
            <Route path="/marketing-plan" element={<MarketingPlan />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
          <AddNewBoardModal
            show={show}
            handleHideFormClick={handleHideFormClick}
            handleBoardCount={handleBoardCount}
          />
        </Router>
      </div>
    </div>
  );
}

export default App;
