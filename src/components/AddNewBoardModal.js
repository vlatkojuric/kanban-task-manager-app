import "../styles/AddNewBoardModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

export default function AddNewBoardModal({
  show,
  handleHideFormClick,
  handleBoardCount,
  handleAddLink,
  handleLinkName,
}) {
  const [addColumn, setAddColumn] = useState([
    { id: Date.now(), value: "" },
    { id: Date.now(), value: "" },
  ]);

  function handleAddColumn() {
    const column = {
      id: Date.now(),
      value: "",
    };

    setAddColumn([...addColumn, column]);
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    show && (
      <section className="backgroundModal">
        <form class="new_board_modal_form" onSubmit={handleSubmit}>
          <CloseIcon onClick={handleHideFormClick} className="close_form" />

          <label for="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleLinkName} />
          <label for="columns">Columns</label>
          {/* <input type="text" id="columns" name="column1" />
          <input type="text" id="columns" name="column2" /> */}
          {addColumn.map((columns) => (
            <input
              key={columns.id}
              type="text"
              id={columns.id}
              value={columns.value}
            />
          ))}
          <button onClick={handleAddColumn}>
            <AddIcon />
            Add New Column
          </button>
          <button onClick={handleBoardCount}>
            <span onClick={handleAddLink}>
              <span onClick={handleHideFormClick}>Create New Board</span>
            </span>
          </button>
        </form>
      </section>
    )
  );
}
