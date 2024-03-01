import "../styles/AddNewBoardModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function AddNewBoardModal({
  show,
  handleHideFormClick,
  handleBoardCount,
  handleAddLink,
  handleLinkName,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    show && (
      <section className="backgroundModal">
        <form class="new_board_modal_form" onSubmit={handleSubmit}>
          <CloseIcon onClick={handleHideFormClick} className="close_form" />

          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleLinkName}
          ></input>
          <label for="columns">Columns</label>
          <input type="text" id="columns" name="column1"></input>
          <input type="text" id="columns" name="column2"></input>
          <button>
            <AddIcon />
            Add New Column
          </button>
          <button onClick={handleBoardCount}>
            <span onClick={handleAddLink}>Create New Board</span>
          </button>
        </form>
      </section>
    )
  );
}
