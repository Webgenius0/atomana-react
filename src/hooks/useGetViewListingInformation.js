import { useAxiosSecure } from '@/hooks/useAxios';
import { useQuery } from '@tanstack/react-query';

export const useGetViewListingInformation = (id) => {
  const axiosPrivate = useAxiosSecure();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['listing-information', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/property/show/${id}`);
      return response.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  return { listingInformation: data?.data, isLoading, isError, error };
};
