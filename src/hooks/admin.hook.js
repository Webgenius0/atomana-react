import { useMutation } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

export const useAddAgent = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        '/api/v1/auth/register-agent',
        payload
      );
      return response.data;
    },
  });

  return result;
};
