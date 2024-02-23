import "./App.css";
import PlatfromLaunch from "./components/PlatformLaunch";
import MarketingPlan from "./components/MarketingPlan";
import Roadmap from "./components/Roadmap";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<PlatfromLaunch />} />
          <Route path="/marketing-plan" element={<MarketingPlan />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
