import "../styles/Header.css";
import AddNewTask from "../assets/AddNewTask";

export default function Header() {
  return (
    <header>
      <h1>hello</h1>
      <span className="add_new_task_header">
        <AddNewTask />
        Add New Task
      </span>
    </header>
  );
}
