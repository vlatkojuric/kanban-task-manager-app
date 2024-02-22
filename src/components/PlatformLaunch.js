import data from "../data.json";

export default function PlatfromLaunch() {
  const platformLaunchTodo = data.boards[0].columns[0];
  const platformLaunchDoing = data.boards[0].columns[1];
  const platformLaunchDone = data.boards[0].columns[2];

  return (
    <section>
      <div>
        <h1>{platformLaunchTodo.name}</h1>
        <ul>
          {platformLaunchTodo?.tasks?.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{platformLaunchDoing.name}</h1>
        <ul>
          {platformLaunchDoing?.tasks?.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{platformLaunchDone.name}</h1>
        <ul>
          {platformLaunchDone?.tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
