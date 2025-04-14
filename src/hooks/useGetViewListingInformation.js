import { useQuery } from "@tanstack/react-query";
import { useAxios, useAxiosSecure } from "@/hooks/useAxios";

export const useGetViewListingInformation = (id) => {
  const axios = useAxios();
  const axiosPrivate = useAxiosSecure();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["propertyDetails", id],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/property/show/${id}`);
      return response.data?.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  return { accessInstruction: data, isLoading, isError, error };
};
