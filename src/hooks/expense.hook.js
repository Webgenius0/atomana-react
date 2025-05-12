import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

export const useGetMyListingExpenses = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['listing_expense', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/expense/my-expense-list`,
        {
          params: { per_page: perPage, page: currentPage },
        }
      );
      return response.data;
    },
  });

  const myListingExpenses = result?.data?.data?.data || [];
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    myListingExpenses,
    current_page,
    totalItems,
    per_page,
  };
};

export const useGetMyBusinessExpenses = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['business_expense', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/expense/my-business-expenses`,
        {
          params: { per_page: perPage, page: currentPage },
        }
      );
      return response.data;
    },
  });

  const myBusinessExpenses = result?.data?.data?.data || [];
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total;
  const per_page = result?.data?.data?.per_page;

  return { ...result, myBusinessExpenses, current_page, totalItems, per_page };
};

export const useGetAgentEarnings = ({
  perPage = 10,
  currentPage = 1,
  name,
}) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['agent_earning', perPage, currentPage, name],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/agent-earning/search`, {
        params: { per_page: perPage, page: currentPage, name },
      });
      return response.data;
    },
  });

  const agentEarnings = result?.data?.data?.data || [];
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total;
  const per_page = result?.data?.data?.per_page;

  return { ...result, agentEarnings, current_page, totalItems, per_page };
};

export const useGetSalesTrack = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['sales_track', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/sales-track`, {
        params: { per_page: perPage, page: currentPage },
      });
      return response.data;
    },
  });

  const salesTrack = result?.data?.data?.data || [];
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total;
  const per_page = result?.data?.data?.per_page;

  return { ...result, salesTrack, current_page, totalItems, per_page };
};

export const useStoreMyListingExpenses = () => {
  const [showInputs, setShowInputs] = useState(false);
  const form = useForm({
    defaultValues: {
      expense_category_id: '',
      expense_sub_category_id: '',
      description: '',
      amount: '',
      payment_method_id: '',
      payee: '',
      recept: '',
      user_id: '',
      reimbursable: '',
      listing: '',
      note: '',
    },
  });
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
        setShowInputs(false);
        form.reset();
        queryClient.invalidateQueries(['listing_expense']);
      }
    },
    onError: (error) => {
      if (typeof error?.response?.data?.error === 'string') {
        alert(`${error?.response?.data?.error}`);
      } else if (error?.response?.data?.error) {
        alert(
          Object.entries(error?.response?.data?.error)
            .map(
              ([field, [message]]) =>
                `${field.split('_').join(' ').toUpperCase()}: ${message}`
            )
            .join(`\n`)
        );
      } else {
        alert(`${error?.response?.data?.message}`);
      }
    },
  });

  return { showInputs, setShowInputs, form, ...result };
};

export const useStoreMyBusinessExpenses = () => {
  const [showInputs, setShowInputs] = useState(false);
  const form = useForm({
    defaultValues: {
      expense_category_id: '',
      expense_sub_category_id: '',
      description: '',
      amount: '',
      payment_method_id: '',
      payee: '',
      recept: '',
      user_id: '',
      reimbursable: '',
      listing: '',
      note: '',
    },
  });
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
        setShowInputs(false);
        form.reset();
        queryClient.invalidateQueries(['business_expense']);
      }
    },
    onError: (error) => {
      if (typeof error?.response?.data?.error === 'string') {
        alert(`${error?.response?.data?.error}`);
      } else if (error?.response?.data?.error) {
        alert(
          Object.entries(error?.response?.data?.error)
            .map(
              ([field, [message]]) =>
                `${field.split('_').join(' ').toUpperCase()}: ${message}`
            )
            .join(`\n`)
        );
      } else {
        alert(`${error?.response?.data?.message}`);
      }
    },
  });

  return { showInputs, setShowInputs, form, ...result };
};

export const useStoreSalesTrack = () => {
  const [showInputs, setShowInputs] = useState(false);
  const form = useForm();
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
        setShowInputs(false);
        form.reset();
        queryClient.invalidateQueries(['sales_track']);
      }
    },
    onError: (error) => {
      if (typeof error?.response?.data?.error === 'string') {
        alert(`${error?.response?.data?.error}`);
      } else if (error?.response?.data?.error) {
        alert(
          Object.entries(error?.response?.data?.error)
            .map(
              ([field, [message]]) =>
                `${field.split('_').join(' ').toUpperCase()}: ${message}`
            )
            .join(`\n`)
        );
      } else {
        alert(`${error?.response?.data?.message}`);
      }
    },
  });

  return { showInputs, setShowInputs, form, ...result };
};

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

export const useStoreCategory = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/expense/category/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['expense_categories']);
        setNameError('');
        setName('');
        setOpen(false);
      }
    },
    onError: (error) => {
      queryClient.invalidateQueries(['expense_categories']);
      setOpen(false);
      setNameError('');
      setName('');
      toast.error(error?.response?.data?.message);
    },
  });

  return { open, setOpen, name, setName, nameError, setNameError, ...result };
};

export const useStoreSubCategory = () => {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [nameError, setNameError] = useState('');
  const [categoryError, setCategoryError] = useState('');
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/expense/sub-category/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['expense_categories']);
        setNameError('');
        setName('');
        setOpen(false);
      }
    },
    onError: (error) => {
      queryClient.invalidateQueries(['expense_categories']);
      setOpen(false);
      setNameError('');
      setName('');
      toast.error(error?.response?.data?.message);
    },
  });

  return {
    open,
    setOpen,
    name,
    setName,
    nameError,
    setNameError,
    categoryId,
    setCategoryId,
    categoryError,
    setCategoryError,
    ...result,
  };
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

export const useUpdateBusinessExpense = (rowId, columnId) => {
  const [showInput, setShowInput] = useState(false);
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.put(
        `/api/v1/expense/update/${columnId}/${rowId}`,
        payload
      );
      return response.data;
    },
    onSuccess: async (data) => {
      if (data?.success) {
        await queryClient.invalidateQueries(['business_expense']);
        setShowInput(false);
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return {
    ...result,
    showInput,
    setShowInput,
  };
};

export const useDeleteExpense = () => {
  const [rowSelection, setRowSelection] = useState({});
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (ids) => {
      const response = await axiosPrivate.delete(`/api/v1/expense/`, {
        data: {
          id: ids,
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['business_expense']);
        queryClient.invalidateQueries(['listing_expense']);
        toast.success(data?.message || 'Expense deleted successfully');
        setRowSelection({});
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { ...result, rowSelection, setRowSelection };
};
