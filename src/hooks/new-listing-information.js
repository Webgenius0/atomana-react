import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

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

export const useGetListingInformation = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['listing-information', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/property`, {
        params: { per_page: perPage, page: currentPage },
      });
      return response.data;
    },
  });

  const listingInformation = result?.data?.data?.data?.map((item) => ({
    ...item,
    path: `/my-systems/new-listing/${item.id}`,
  }));

  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    listingInformation,
    current_page,
    totalItems,
    per_page,
  };
};
