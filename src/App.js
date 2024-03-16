import "./App.css";
import PlatfromLaunch from "./pages/PlatformLaunch";
import MarketingPlan from "./pages/MarketingPlan";
import Roadmap from "./pages/Roadmap";
import Navbar from "./components/Navbar";
import AddNewBoardModal from "./components/AddNewBoardModal";
import NewBoardData from "./components/NewBoardData";
import data from "./data.json";

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
  const [addColumn, setAddColumn] = useState([
    { name: "", tasks: [], id: Date.now() },
  ]);

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
  function addNewColumns() {
    let copy = [...addColumn, { name: "", tasks: [], id: Date.now() }];
    console.log(copy);
    setAddColumn(copy);
  }

  function handleColumnName(index, name) {
    let copy = [...addColumn];
    copy[index].name = name;
    console.log(copy);
    setAddColumn(copy);
  }

  function handleDeleteColumn(id) {
    setAddColumn(addColumn.filter((column) => column.id !== id));
    console.log(handleDeleteColumn);
  }

  //combining the board links with columns

  let board = { name: newLink, columns: addColumn };

  function addNewBoard() {}

  function addBoardData() {
    let result = addNewBoard(board);
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
                <NewBoardData
                  id={link.id}
                  boardName={link.name}
                  addColumn={addColumn}
                />
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
          addNewColumns={addNewColumns}
          newLink={newLink}
          addColumn={addColumn}
          handleDeleteColumn={handleDeleteColumn}
          handleColumnName={handleColumnName}
          addBoardData={addBoardData}
        />
      </Router>
    </div>
  );
}

export default App;
