import { useQuery } from "@tanstack/react-query";

export function useFetchData() {
  return useQuery({
    queryKey: ["kanban-data"],
    queryFn: async () => {
      const response = await fetch("/data.json");

      return response.data;
    },
  });
}
