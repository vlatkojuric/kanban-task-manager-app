import { useFetchData } from "../hooks/useFetchData";

export default function PlatfromLaunch() {
  const { isLoading, isError, data } = useFetchData();

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>Data can not be loaded</h1>;

  return (
    <div>
      <h1>Platform Launch</h1>
    </div>
  );
}
