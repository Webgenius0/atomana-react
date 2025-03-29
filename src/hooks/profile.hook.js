import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';
import { useState } from 'react';
import toast from 'react-hot-toast';

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

export const usePostProfile = () =>{
  const [modal, setModal] = useState(null);

  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ newAddress, field }) =>{
      console.log(`API Call: /api/v1/profile/${field}`);
      console.log(field)
      console.log(newAddress)
      const res = await axiosPrivate.put(`/api/v1/profile/${field}`,newAddress);
      return res?.data;
    },
    onSuccess: (data) =>{
      console.log({test: data})
      setModal(null);
      queryClient.invalidateQueries(['profile'])
    },
    onError: (error) =>{
      toast.error(error.response.data?.message || 'Failed to update address.')
    },
  });
  return { mutate , modal, setModal, isPending};
}
