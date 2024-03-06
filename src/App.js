import "./App.css";
import PlatfromLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import AddNewBoardModal from "./components/AddNewBoardModal";
import NewBoardData from "./components/NewBoardData";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);
  const [boardCount, setBoardCount] = useState(3);
  const [newLink, setNewLink] = useState("");
  const [navLink, setNavLink] = useState([
    { name: "Platform Launch", to: "/" },
    { name: "Marketing Plan", to: "/marketing-plan" },
    { name: "Roadmap", to: "/roadmap" },
  ]);
  const [addInput, setAddInput] = useState([{ id: Date.now(), value: "" }]);
  const [addColumn, setAddColumn] = useState([]);

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
    const link = {
      name: newLink,
      to: `/${newLink.replace(/\s+/g, "-")}`,
    };
    setNavLink([...navLink, link]);
  }

  function handleLinkName(event) {
    setNewLink(event.target.value);
  }

  function handleAddInput() {
    const input = {
      id: Date.now(),
      value: "",
    };

    setAddInput([...addInput, input]);
  }

  function resetInputs() {
    setAddInput([]);
  }

  function handleColumnName(inputId, event) {
    setAddColumn((prevColumns) => {
      const columnToUpdate = prevColumns.find(
        (column) => column.id === inputId
      );

      if (columnToUpdate) {
        return prevColumns.map((column) =>
          column.id === inputId
            ? { ...column, value: event.target.value }
            : column
        );
      } else {
        return [...prevColumns, { id: inputId, value: event.target.value }];
      }
    });
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
          {navLink.map((link) => (
            <Route
              key={link.to}
              path={link.to}
              element={<NewBoardData addColumn={addColumn} />}
            />
          ))}
        </Routes>
        <AddNewBoardModal
          show={show}
          handleHideFormClick={handleHideFormClick}
          handleBoardCount={handleBoardCount}
          handleAddLink={handleAddLink}
          handleLinkName={handleLinkName}
          addInput={addInput}
          handleAddInput={handleAddInput}
          resetInputs={resetInputs}
          handleColumnName={handleColumnName}
        />
      </Router>
    </div>
  );
}

export default App;
