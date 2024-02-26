import "../styles/AddNewBoardModal.css";

export default function AddNewBoardModal({ show }) {
  return (
    show && (
      <section class="new_board_modal_form">
        <form>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name"></input>
          <label for="columns">Columns</label>
          <input type="text" id="columns" name="column1"></input>
          <input type="text" id="columns" name="column2"></input>
        </form>
        <button>+Add New Column</button>
        <button>Create New Board</button>
      </section>
    )
  );
}
