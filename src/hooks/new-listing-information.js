import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

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

  const listingInformation =
    result?.data?.data?.data?.map((item) => ({
      ...item,
      path: `/my-systems/new-listing/${item.id}`,
    })) || [];

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

export const useDeleteListingInformation = () => {
  const [rowSelection, setRowSelection] = useState({});
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (ids) => {
      const response = await axiosPrivate.delete(`/api/v1/property/`, {
        data: {
          id: ids,
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['listing-information']);
        toast.success(
          data?.message || 'Listing Information deleted successfully'
        );
        setRowSelection({});
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { ...result, rowSelection, setRowSelection };
};
