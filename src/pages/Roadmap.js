import data from "../data.json";
import "../styles/Roadmap.css";
import Header from "../components/Header";

export default function Roadmap() {
  const roadmapNow = data?.boards[2].columns[0];
  const roadmapNext = data?.boards[2].columns[1];
  const roadmapLater = data?.boards[2].columns[2];

  return (
    <div className="columns_container">
      <Header />
      <section>
        <div className="columns_container_tasks">
          <h1>{roadmapNow.name}</h1>
          <ul>
            {roadmapNow?.tasks?.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        </div>

        <div className="columns_container_tasks">
          <h1>{roadmapNext.name}</h1>
        </div>
        <div className="columns_container_tasks">
          <h1>{roadmapLater.name}</h1>
        </div>
      </section>
    </div>
  );
}
