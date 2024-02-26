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

  function handleShowFormClick() {
    setShow((prev) => !prev);
  }

  return (
    <div className="App">
      <Router>
        <Navbar handleShowFormClick={handleShowFormClick} />
        <Routes>
          <Route path="/" element={<PlatfromLaunch />} />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
        <AddNewBoardModal show={show} />
      </Router>
    </div>
  );
}

export default App;
