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

export const usePostProfile = () => {
  const [modal, setModal] = useState(null);

  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: async ({ newAddress, field }) => {
      if (field === 'date_of_birth') {
        field = 'birthday';
      }

      // Format date if the field is birthday and newAddress is a date
      if (field === 'birthday' && newAddress?.date_of_birth) {
        const dateStr = newAddress.date_of_birth;
        // Convert from MM/DD/YYYY or MM-DD-YYYY to MM-DD-YYYY
        const dateParts = dateStr.split(/[\/-]/);
        if (dateParts.length === 3) {
          const [month, day, year] = dateParts;
          newAddress.date_of_birth = `${month.padStart(2, '0')}-${day.padStart(2, '0')}-${year}`;
        }
      }

      console.log(`API Call: /api/v1/profile/${field}`);
      console.log(field);
      console.log(newAddress);
      
      const res = await axiosPrivate.put(`/api/v1/profile/${field}`, newAddress);
      return res?.data;
    },
    onSuccess: (data) => {
      console.log({ test: data });
      setModal(null);
      queryClient.invalidateQueries(['profile']);
    },
    onError: (error) => {
      toast.error(error.response.data?.message || 'Failed to update address.');
      console.log(error?.response?.data?.message);
    },
  });
  
  return { mutate, modal, setModal, isPending };
};