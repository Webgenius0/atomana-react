// hooks/useGetMyClassroomsData.js
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";

export const useGetMyClassroomsData = (type) => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["systemsData", type],
    queryFn: async () => {
      const response = await axios.get("/my_classroom.json");
      return response.data; // Ensure this returns the correct data structure
    },
    staleTime: 5 * 60 * 1000, 
  });

  return { data, isLoading, isError, error };
};
