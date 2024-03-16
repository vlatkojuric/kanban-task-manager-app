import AddNewTask from "../assets/AddNewTask";

export default function NewBoardData({ addColumn, boardName }) {
  return (
    <div className="columns_container">
      <header>
        <h1>{boardName}</h1>
        <span className="add_new_task_header">
          <AddNewTask />
          Add New Task
        </span>
      </header>
      <section>
        <div className="columns_container_tasks">
          <h1>{addColumn.columns}</h1>
        </div>
      </section>
    </div>
  );
}
