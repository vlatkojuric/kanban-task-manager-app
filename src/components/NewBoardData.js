import AddNewTask from "../assets/AddNewTask";

export default function NewBoardData({ addColumn }) {
  return (
    <div className="columns_container">
      <header>
        <h1>Platform Launch</h1>
        <span className="add_new_task_header">
          <AddNewTask />
          Add New Task
        </span>
      </header>
      <section>
        {addColumn?.map((column, index) => (
          <div className="columns_container_tasks" key={index}>
            <h1>{column.value}</h1>
          </div>
        ))}

        {/* <div className="columns_container_tasks">
          <h1>{addColumn}</h1>
        </div> */}

        {/* <div className="columns_container_tasks">
          <h1>Done</h1>
        </div>  */}
      </section>
    </div>
  );
}
