import { useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

export const useGetExpenseTypes = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['expense_types'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/expense/type');
      return response.data;
    },
  });

  const expenseTypes = result?.data?.data;
  return { ...result, expenseTypes };
};

export const useGetExpenseCategories = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['expense_categories'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/expense/category');
      return response.data;
    },
  });

  const expenseCategories = result?.data?.data;
  return { ...result, expenseCategories };
};

export const useGetExpenseSubCategories = (categorySlug) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['expense_subcategories', categorySlug],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/expense/sub-category/${categorySlug}`
      );
      return response.data;
    },
    enabled: !!categorySlug,
  });

  const expenseSubCategories = result?.data?.data;
  return { ...result, expenseSubCategories };
};
