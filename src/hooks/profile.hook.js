import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useAxiosSecure } from './useAxios';

export const useGetProfile = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/profile/show');
      return response.data;
    },
  });

  const profile = result?.data?.data;
  return { ...result, profile };
};

export const useEditProfile = () => {
  const [open, setOpen] = useState(false);

  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ data, field }) => {
      const res = await axiosPrivate.put(`/api/v1/profile/${field}`, data);
      return res?.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        setOpen(false);
        queryClient.invalidateQueries(['profile']);
      }
    },
    onError: (error) => {
      toast.error(error.response.data?.message || 'Failed to update address.');
    },
  });
  return { mutate, isPending, open, setOpen };
};

export const useChangePassword = () => {
  const axiosPrivate = useAxiosSecure();
  const navigate = useNavigate();
  const form = useForm();

  const result = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(
        '/api/v1/auth/change-password',
        data
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        navigate('/profile');
        toast.success('Password updated successfully!');
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
