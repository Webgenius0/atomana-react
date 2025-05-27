import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const form = useForm();

  const result = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(
        `/api/v1/admin/agent/${slug}`,
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['agent', slug]);
        toast.success('Successfully Updated!');
        navigate('/profile/manage-team');
      }
    },
    onError: (error) => {
      const response = errorResponse(error, (fields) => {
        Object.entries(fields).forEach(([field, messages]) => {
          form.setError(field, {
            message: messages?.[0],
          });
        });
      });
      if (response) {
        toast.error(response);
      }
    },
  });

  return { ...result, form };
};

export const useRegisterAgent = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      total_commission_this_contract_year: '0',
    },
  });

  const result = useMutation({
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
      const response = errorResponse(error, (fields) => {
        Object.entries(fields).forEach(([field, messages]) => {
          form.setError(field, {
            message: messages?.[0],
          });
        });
      });
      if (response) {
        toast.error(response);
      }
    },
  });

  return { ...result, form };
};
