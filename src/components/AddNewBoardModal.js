import "../styles/AddNewBoardModal.css";

export default function AddNewBoardModal({ show, handleHideFormClick }) {
  return (
    show && (
      <section className="backgroundModal">
        <form class="new_board_modal_form">
          <span onClick={handleHideFormClick} className="close_form">
            X
          </span>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"></input>
          <label for="columns">Columns</label>
          <input type="text" id="columns" name="column1"></input>
          <input type="text" id="columns" name="column2"></input>
          <button>+Add New Column</button>
          <button>Create New Board</button>
        </form>
      </section>
    )
  );
}
