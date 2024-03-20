import "./App.css";
import PlatfromLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import AddNewBoardModal from "./components/AddNewBoardModal";
import NewBoardData from "./components/NewBoardData";
// import data from "./data.json";

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
    // { name: "", columns: [], to: `/${newLink.replace(/\s+/g, "-")}` },
  ]);

  const [addColumn, setAddColumn] = useState([]);

  //board modal realted functions

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
      id: Date.now(),
      name: newLink,
      to: `/${newLink.replace(/\s+/g, "-")}`,
    };
    setNavLink([...navLink, link]);
  }

  function handleLinkName(event) {
    setNewLink(event.target.value);
  }

  //columns related functions
  function handleAddNewColumns() {
    const newColumn = {
      id: Date.now(),
      columnName: "",
      // tasks: [],
    };
    setAddColumn([...addColumn, newColumn]);
  }

  function handleColumnName(index, value) {
    const updatedColumns = [...addColumn];
    updatedColumns[index].columnName = value;
    setAddColumn(updatedColumns);
  }

  function handleDeleteColumn(id) {
    setAddColumn(addColumn.filter((column) => column.id !== id));
    console.log(handleDeleteColumn);
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
              element={
                <NewBoardData boardName={link.name} addColumn={addColumn} />
              }
            />
          ))}
        </Routes>
        <AddNewBoardModal
          show={show}
          handleHideFormClick={handleHideFormClick}
          handleBoardCount={handleBoardCount}
          handleAddLink={handleAddLink}
          handleLinkName={handleLinkName}
          handleAddNewColumns={handleAddNewColumns}
          handleColumnName={handleColumnName}
          newLink={newLink}
          addColumn={addColumn}
          handleDeleteColumn={handleDeleteColumn}
        />
      </Router>
    </div>
  );
}

export default App;
