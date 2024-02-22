import data from "../data.json";

export default function PlatfromLaunch() {
  return (
    <div>
      <h1>Platform Launch</h1>
      {data?.boards?.map((info) => (
        <p>{info.name}</p>
      ))}
    </div>
  );
}
