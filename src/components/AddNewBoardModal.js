import "../styles/AddNewBoardModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddNewTask from "../assets/AddNewTask";
export default function AddNewBoardModal({
  show,
  handleHideFormClick,
  handleBoardCount,
  handleAddLink,
  handleLinkName,
  handleColumnName,
  newLink,
  handleAddNewColumns,
  addColumn,
  handleDeleteColumn,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    show && (
      <section className="backgroundModal">
        <form className="new_board_modal_form" onSubmit={handleSubmit}>
          <div className="top_text_board_modal">
            <p>Add New Board</p>
            <span>
              <CloseIcon onClick={handleHideFormClick} className="close_form" />
            </span>
          </div>
          <div className="board_name_input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleLinkName}
              value={newLink}
            />
          </div>
          <div className="columns_input">
            <label htmlFor="columns">Columns</label>

            {addColumn.map((column, index) => (
              <div className="columns_container" key={column.id}>
                <input
                  key={column.id}
                  type="text"
                  name="columns"
                  id={column.id}
                  onChange={(event) =>
                    handleColumnName(index, event.target.value)
                  }
                  value={column.columnName}
                />
                <button onClick={() => handleDeleteColumn(column.id)}>x</button>
              </div>
            ))}
          </div>

          <div className="buttons_board_modal">
            <button
              className="add_new_column_button"
              onClick={handleAddNewColumns}
            >
              <AddNewTask />
              Add New Column
            </button>

            <button
              className="create_new_board_button"
              onClick={handleBoardCount}
            >
              <span>
                <span onClick={handleAddLink}>
                  <span onClick={handleHideFormClick}>
                    <span>Create New Board</span>
                  </span>
                </span>
              </span>
            </button>
          </div>
        </form>
      </section>
    )
  );
}
