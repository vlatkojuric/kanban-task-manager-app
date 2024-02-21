import { useQuery } from "@tanstack/react-query";

export function useFetchData() {
  return useQuery({
    queryKey: ["kanban-data"],
    queryFn: async () => {
      const response = await fetch("/data.json");
      console.log(response);
      const data = await response.json();
      console.log(data);

      return data;
    },
  });
}
