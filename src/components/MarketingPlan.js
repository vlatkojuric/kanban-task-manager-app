import data from "../data.json";

export default function MarketingPlan() {
  const marketingPlanTodo = data?.boards[1].columns[0];
  const marketingPlanDoing = data?.boards[1].columns[1];
  const marketingPlanDone = data?.boards[1].columns[2];

  return (
    <section>
      <div>
        <h1>{marketingPlanTodo.name}</h1>
        <ul>
          {marketingPlanTodo?.tasks?.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul>
      </div>

      <div>
        <h1>{marketingPlanDoing.name}</h1>
        {/* <ul>
          {marketingPlanDoing?.tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul> */}
      </div>

      <div>
        <h1>{marketingPlanDone.name}</h1>
        {/* <ul>
          {marketingPlanDone?.tasks.map((task, index) => (
            <li key={index}>{task.title}</li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
