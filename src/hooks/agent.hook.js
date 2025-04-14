import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

export const useGetAgents = (page = 1, perPage = 10) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['agents', page],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/admin/agent?page=${page}&per_page=${perPage}`
      );
      return response.data;
    },
    keepPreviousData: true,
  });

  return {
    ...result,
    agents: result?.data?.data?.data || [],
    totalPages: result?.data?.data?.last_page || 1,
    currentPage: result?.data?.data?.current_page || 1,
  };
};
export const useGetSingleAgent = (slug) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['agent', slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/admin/agent/${slug}`);
      return response.data;
    },
    keepPreviousData: true,
  });

  return {
    ...result,
    agent: result?.data?.data,
  };
};

export const useUpdateSingleAgent = (slug) => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(
        '/api/v1/auth/register-agent',
        data
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['agent', slug]);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message || 'Something went wrong');
    },
  });
};

export const useRegisterAgent = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(
        '/api/v1/auth/register-agent',
        data
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['agents_admin']);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message || 'Something went wrong');
    },
  });
};
