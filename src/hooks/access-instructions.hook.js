import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
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

  const accessInstructions =
    result?.data?.data?.data?.map((item) => ({
      ...item,
      path: `/my-systems/team/access-instructions/${item.id}`,
    })) || [];

  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    accessInstructions,
    current_page,
    totalItems,
    per_page,
  };
};

export const useStoreAccessInstruction = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const form = useForm({
    defaultValues: {
      property_id: '',
      property_type_id: '',
      price: '',
      size: '',
      access_key: '',
      lock_box_location: '',
      pickup_instructions: '',
      gate_code: '',
      gete_access_location: '',
      visitor_parking: '',
      note: '',
    },
  });

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

  return { form, ...result };
};

export const useDeleteAccessInstruction = () => {
  const [rowSelection, setRowSelection] = useState({});
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (ids) => {
      const response = await axiosPrivate.delete(
        `/api/v1/property/access-instruction/`,
        {
          data: {
            id: ids,
          },
        }
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['access-instructions']);
        toast.success(
          data?.message || 'Access Instruction deleted successfully'
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
