import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
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

export const useGetVendors = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['vendors'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/expense/vendor');
      return response.data;
    },
  });

  const vendors = result?.data?.data;
  return { ...result, vendors };
};

export const useGetMyBusinessExpenses = ({ per_page = 25, page = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['business_expense'],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/expense/my-business-expenses`,
        {
          params: { per_page, page },
        }
      );
      return response.data;
    },
  });

  const myBusinessExpenses = result?.data?.data?.data || [];

  return { ...result, myBusinessExpenses };
};

export const useStoreMyBusinessExpenses = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/expense/store/my-business-expenses`,
        payload,
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
        queryClient.invalidateQueries(['business_expense']);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};

export const useGetMyListingExpenses = ({ per_page = 25, page = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['listing_expense'],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/expense/my-expense-list`,
        {
          params: { per_page, page },
        }
      );
      return response.data;
    },
  });

  const myListingExpenses = result?.data?.data?.data || [];

  return { ...result, myListingExpenses };
};

export const useStoreMyListingExpenses = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/expense/store/my-expense-list`,
        payload,
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
        queryClient.invalidateQueries(['listing_expense']);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};

export const useGetMyAgentExpenses = ({ per_page = 25, page = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['agent_expense'],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/expense/my-agent-earnings`,
        {
          params: { per_page, page },
        }
      );
      return response.data;
    },
  });

  const myAgentExpenses = result?.data?.data?.data || [];

  return { ...result, myAgentExpenses };
};

export const useStoreMyAgentExpenses = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/expense/store/my-agent-earnings`,
        payload,
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
        queryClient.invalidateQueries(['agent_expense']);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};

export const useGetAgents = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['agents'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/user/agent/get-agent');
      return response.data;
    },
  });

  const agents = result?.data?.data || [];
  return { ...result, agents };
};

export const useGetSalesTrack = ({ per_page = 25, page = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['sales_track'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/sales-track`, {
        params: { per_page, page },
      });
      return response.data;
    },
  });

  const salesTrack = result?.data?.data || [];
  const current_page = result?.data?.current_page || 1;

  return { ...result, salesTrack, current_page };
};

export const useStoreSalesTrack = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/sales-track/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['sales_track']);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};
