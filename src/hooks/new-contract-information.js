import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

export const useGetContractInformation = ({
  perPage = 10,
  currentPage = 1,
}) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['listing-information', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/property`, {
        params: { per_page: perPage, page: currentPage },
      });
      return response.data;
    },
  });

  const listingInformation =
    result?.data?.data?.data?.map((item) => ({
      ...item,
      path: `/my-systems/new-contract/${item.id}`,
    })) || [];

  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    listingInformation,
    current_page,
    totalItems,
    per_page,
  };
};

export const useStoreContractInformation = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      address: '',
      closing_data: '',
      is_co_listing: '0',
      co_agent: null,
      co_agent_percentage: '',
      represent: '',
      date_listed: null,
      price: '',
      contract_data: '',
      commision_percentage: '',
      referral_percentage: '',
      property_source_id: '',
      name: '',
      company: '',
      email: '',
      phone: '',
      comment: '',
    },
    // resolver: zodResolver(formSchema),
  });

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
