import { useQuery } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxios";

export const usePropertyDropdown = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['propertyid'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/property/dropdown');
      return response.data;
    },
  });

  const propertyid = result?.data?.data;
  return { ...result, propertyid, isLoading: result.isLoading };
};
