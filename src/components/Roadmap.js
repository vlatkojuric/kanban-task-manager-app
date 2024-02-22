import data from "../data.json";

export default function Roadmap() {
  const roadmapNow = data?.boards[2].columns[0];
  const roadmapNext = data?.boards[2].columns[1];
  const roadmapLater = data?.boards[2].columns[2];
  return (
    <section>
      <div>
        <h1>{roadmapNow.name}</h1>
        <ul>
          {roadmapNow?.tasks?.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{roadmapNext.name}</h1>
      </div>
      <div>
        <h1>{roadmapLater.name}</h1>
      </div>
    </section>
  );
}
