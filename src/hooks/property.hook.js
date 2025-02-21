import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

export const useGetProperties = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/property/dropdown');
      return response.data;
    },
  });

  const properties = result?.data?.data;
  return { ...result, properties };
};

export const useStoreProperty = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/property/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['properties']);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};
