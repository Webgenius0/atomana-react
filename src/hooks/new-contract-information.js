import { ROLE } from '@/constants';
import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAuth } from './useAuth';
import { useAxiosSecure } from './useAxios';

export const useGetContractInformation = ({
  perPage = 10,
  currentPage = 1,
}) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['contract-information', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/contract`, {
        params: { per_page: perPage, page: currentPage },
      });
      return response.data;
    },
  });

  const contractInformation =
    result?.data?.data?.data?.map((item) => ({
      ...item,
      path: `/my-systems/new-contract/${item.uid}`,
    })) || [];

  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    contractInformation,
    current_page,
    totalItems,
    per_page,
  };
};

export const useStoreContractInformation = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const userRole = user?.role;

  const defaultValues = {
    agent: userRole === ROLE.ADMIN ? null : user?.id,
    address: '',
    closing_date: '',
    is_co_listing: '0',
    co_agent: null,
    co_agent_percentage: '',
    represent: '',
    date_listed: null,
    price: '',
    date_under_contract: '',
    commission_percentage: '',
    referral_percentage: '',
    buyers_agent_commission: '',
    commission_split: '',
    property_source_id: '',
    name: '',
    company: '',
    email: '',
    phone: '',
    comment: '',
  };

  const form = useForm({
    defaultValues,
    // resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    if (user) form.reset(defaultValues);
  }, [user]);

  const result = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(`/api/v1/contract`, data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Contract Information Created Successfully');
        queryClient.invalidateQueries(['contract-information']);
        form.reset();
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

export const useGetViewContractInformation = (id) => {
  const axiosPrivate = useAxiosSecure();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['contract-information', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/contract/${id}`);
      return response.data;
    },
    enabled: !!id,
    staleTime: 5 * 60 * 1000,
  });

  return { contractInformation: data?.data, isLoading, isError, error };
};

export const useDeleteContractInformation = () => {
  const [rowSelection, setRowSelection] = useState({});
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (ids) => {
      const response = await axiosPrivate.delete(`/api/v1/contract/`, {
        data: {
          id: ids,
        },
      });
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['contract-information']);
        toast.success(
          data?.message || 'Contract Information deleted successfully'
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
