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
  // const [addInput, setAddInput] = useState([{ id: Date.now(), value: "" }]);
  const [addColumn, setAddColumn] = useState([
    { name: "", tasks: [], id: Date.now() },
  ]);

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

  let addNewColumns = () => {
    let copy = [...addColumn, { name: "", tasks: [], id: Date.now() }];
    console.log(copy);
    setAddColumn(copy);
  };

  function handleDeleteColumn(id) {
    setAddColumn(addColumn.filter((column) => column.id !== id));
    console.log(handleDeleteColumn);
  }

  // function handleColumnName(event) {
  //   setNewColumn(event.target.value);
  // }

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
                  to={link.to}
                  // addColumn={addColumn.map((column) => (
                  //   <h1 key={column.id}>{column.name}</h1>
                  // ))}
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
          // addInput={addInput}
          // handleAddInput={handleAddInput}
          // resetInputs={resetInputs}
          addNewColumns={addNewColumns}
          newLink={newLink}
          addColumn={addColumn}
          handleDeleteColumn={handleDeleteColumn}
          // handleAddColumn={handleAddColumn}
          // handleColumnName={handleColumnName}
          // newColumn={newColumn}
        />
      </Router>
    </div>
  );
}

export default App;
