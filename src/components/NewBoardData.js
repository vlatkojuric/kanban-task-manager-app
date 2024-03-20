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
        {addColumn.map((column) => (
          <div className="columns_container_tasks" key={column.id}>
            <h1>{column.columnName}</h1>
          </div>
        ))}
      </section>
    </div>
  );
}
