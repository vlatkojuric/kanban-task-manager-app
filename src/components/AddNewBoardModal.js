import "../styles/AddNewBoardModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddNewTask from "../assets/AddNewTask";
export default function AddNewBoardModal({
  show,
  handleHideFormClick,
  handleBoardCount,
  handleAddLink,
  handleLinkName,
  addInput,
  handleAddInput,
  resetInputs,
  handleColumnName,
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
            <span onClick={resetInputs}>
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
            />
          </div>
          <div className="columns_input">
            <label htmlFor="columns">Columns</label>

            {addInput.map((input) => (
              <input
                key={input.id}
                type="text"
                id={input.id}
                onChange={(event) => handleColumnName(input.id, event)}
              />
            ))}
          </div>

          <div className="buttons_board_modal">
            <button className="add_new_column_button" onClick={handleAddInput}>
              <AddNewTask />
              Add New Column
            </button>

            <button
              className="create_new_board_button"
              onClick={handleBoardCount}
            >
              <span onClick={resetInputs}>
                <span onClick={handleAddLink}>
                  <span onClick={handleHideFormClick}>Create New Board</span>
                </span>
              </span>
            </button>
          </div>
        </form>
      </section>
    )
  );
}
