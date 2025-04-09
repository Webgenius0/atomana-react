import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

const accessInstructionData = [
  {
    address: 'Address',
    property_type: 'Apartment',
    price: 500,
    size: 1200,
    key_access_code: 'Key Access Code',
    lockbox_location: 'Lockbox Location',
    key_pickup_instructions: 'Key Pickup Instruction',
    gate_code: 'Gate Code',
    gate_access_location: 'Gate Access Location',
    visitor_parking: 'Visitor Parking',
    notes: 'Notes',
  },
];

export const useGetAccessInstructions = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['access-instructions', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/access-instructions`, {
        params: { per_page: perPage, page: currentPage },
      });
      return response.data;
    },
  });

  //   const accessInstructions = result?.data?.data?.data || accessInstructionData;

  const accessInstructions = accessInstructionData;
  const isLoading = false;
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    accessInstructions,
    current_page,
    totalItems,
    per_page,
    isLoading,
  };
};

export const useStoreAccessInstruction = () => {
  const form = useForm();
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/access-instructions`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['access-instructions']);
        toast.success(data?.message);
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { form, ...result };
};
