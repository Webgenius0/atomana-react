import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

export const useGetPaymentMethods = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['payment_methods'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/method/payment');
      return response.data;
    },
  });

  const paymentMethods = result?.data?.data;
  return { ...result, paymentMethods };
};
