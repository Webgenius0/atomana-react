import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import toast from 'react-hot-toast';
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
