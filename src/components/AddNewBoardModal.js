import "../styles/AddNewBoardModal.css";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";

export default function AddNewBoardModal({
  show,
  handleHideFormClick,
  handleBoardCount,
  handleAddLink,
  handleLinkName,
  addInput,
  handleAddInput,
}) {
  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    show && (
      <section className="backgroundModal">
        <form className="new_board_modal_form" onSubmit={handleSubmit}>
          <CloseIcon onClick={handleHideFormClick} className="close_form" />

          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={handleLinkName} />
          <label htmlFor="columns">Columns</label>

          <input type="text" id="name" name="name" value="here" />

          {addInput.map((input) => (
            <input key={input.id} type="text" id="column" value={input.value} />
          ))}

          <button onClick={handleAddInput}>
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
