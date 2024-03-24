import AddNewTask from "../assets/AddNewTask";
import { useState } from "react";
import Columns from "./Columns";

export default function NewBoardData({ boardName }) {
  const [addColumn, setAddColumn] = useState([]);
  const [newColumn, setNewColumn] = useState("");

  //columns related functions
  function handleAddNewColumns() {
    const column = {
      id: Date.now(),
      columnName: newColumn,
      // tasks: [],
    };
    setAddColumn([...addColumn, column]);
  }

  // function handleColumnName(index, value) {
  //   const updatedColumns = [...addColumn];
  //   updatedColumns[index].columnName = value;
  //   setAddColumn(updatedColumns);
  // }

  // function handleDeleteColumn(id) {
  //   setAddColumn(addColumn.filter((column) => column.id !== id));
  //   console.log(handleDeleteColumn);
  // }

  return (
    <div className="columns_container">
      <header>
        <h1>{boardName}</h1>
        <div className="add_column_input">
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => setNewColumn(event.target.value)}
            value={newColumn}
          />

          <button className="add_new_task_header" onClick={handleAddNewColumns}>
            <AddNewTask />
            Add New Column
          </button>
        </div>
      </header>
      <section>
        {addColumn.map((column) => (
          <Columns columnName={column.columnName} id={column.id} />
        ))}
      </section>
    </div>
  );
}
