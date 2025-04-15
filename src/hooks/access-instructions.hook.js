import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAxiosSecure } from './useAxios';

export const useGetSingleAccessInstruction = (id) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['access-instruction', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/property/access-instruction/${id}`
      );
      return response.data;
    },
  });

  //   const accessInstructions = result?.data?.data?.data || accessInstructionData;

  const accessInstruction = result?.data?.data;

  return {
    ...result,
    accessInstruction,
  };
};

export const useGetAccessInstructions = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['access-instructions', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/property/access-instruction`,
        {
          params: { per_page: perPage, page: currentPage },
        }
      );
      return response.data;
    },
  });

  const accessInstructions = result?.data?.data?.data?.map((item) => ({
    ...item,
    path: `/my-systems/team/access-instructions/${item.id}`,
  }));

  const isLoading = false;
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    accessInstructions,
    current_page,
    totalItems,
    per_page,
    isLoading,
  };
};

export const useStoreAccessInstruction = () => {
  const form = useForm();
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/property/access-instruction`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['access-instructions']);
        toast.success(data?.message);
        navigate('/my-systems/team/access-instructions');
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.error);
    },
  });

  return { form, ...result };
};
