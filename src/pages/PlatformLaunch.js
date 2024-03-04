import data from "../data.json";
import "../styles/PlatfromLaunch.css";
import AddNewTask from "../assets/AddNewTask";

export default function PlatfromLaunch() {
  const platformLaunchTodo = data.boards[0].columns[0];
  const platformLaunchDoing = data.boards[0].columns[1];
  const platformLaunchDone = data.boards[0].columns[2];

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
        <div className="columns_container_tasks">
          <h1>{platformLaunchTodo.name}</h1>
          <ul>
            {platformLaunchTodo?.tasks?.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        </div>

        <div className="columns_container_tasks">
          <h1>{platformLaunchDoing.name}</h1>
          <ul>
            {platformLaunchDoing?.tasks?.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        </div>

        <div className="columns_container_tasks">
          <h1>{platformLaunchDone.name}</h1>
          <ul>
            {platformLaunchDone?.tasks.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
