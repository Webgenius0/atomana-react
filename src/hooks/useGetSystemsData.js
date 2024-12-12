// hooks/useSystemsData.js
import { useQuery } from "@tanstack/react-query";
import { useAxios } from "@/hooks/useAxios";

export const useGetSystemsData = (type) => {
  const axios = useAxios();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["systemsData", type],
    queryFn: async () => {
      const response = await axios.get("/my_systems_all.json");
      return response.data;
    },
  });

  // Filter data by the type,
  const filteredData = type
    ? data?.filter((item) => item?.type.toLowerCase() === type.toLowerCase())
    : data;

  return { data: filteredData, isLoading, isError, error };
};
