import AddNewTask from "../assets/AddNewTask";

export default function NewBoardData({ addColumn, newLink }) {
  let board = { name: newLink, columns: addColumn };

  return (
    <div className="columns_container">
      <header>
        <h1>{board.name}</h1>
        <span className="add_new_task_header">
          <AddNewTask />
          Add New Task
        </span>
      </header>
      <section>
        {addColumn.map((column) => (
          <div className="columns_container_tasks">
            <h1>{column.name}</h1>
          </div>
        ))}
      </section>
    </div>
  );
}
