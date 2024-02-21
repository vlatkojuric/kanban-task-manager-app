import "./App.css";
import PlatfromLaunch from "./components/PlatformLaunch";
import MarketingPlan from "./components/MarketingPlan";
import Roadmap from "./components/Roadmap";
import Navbar from "./components/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const client = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<PlatfromLaunch />} />
            <Route path="/marketing-plan" element={<MarketingPlan />} />
            <Route path="/roadmap" element={<Roadmap />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
