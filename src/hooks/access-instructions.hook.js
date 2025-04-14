import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

const accessInstructionData = [
  {
    id: 1,
    address: '1234 Maple Street, San Francisco, CA 94117',
    property_type: 'Apartment',
    price: 1200000,
    size: 1500,
    key_access_code: '1234 Maple Street, San Francisco, CA 94117',
    lockbox_location: 'Lockbox is located on the front door handle.',
    key_pickup_instructions:
      'Keys can also be picked up from the listing office at 456 Realty Lane, Suite 101, between 9 AM - 5 PM.',
    gate_code: '1234 Maple Street, San Francisco, CA 94117',
    gate_access_location:
      'Main gate entrance on Oakwood Drive. Use the keypad located on the left side of the gate.',
    visitor_parking:
      'Designated visitor parking spots are available to the right of the main entrance.',
    notes: `<ul>
        <li>Designated visitor parking spots are available to the right of the main entrance.</li>
        <li>Designated visitor parking spots are available to the right of the main entrance.</li>
      </ul>`,
  },
];

export const useGetSingleAccessInstruction = (id) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['access-instruction', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/property/access-instruction/${id}`
      );
      return response.data;
    },
  });

  //   const accessInstructions = result?.data?.data?.data || accessInstructionData;

  const accessInstruction = result?.data?.data;

  return {
    ...result,
    accessInstruction,
  };
};

export const useGetAccessInstructions = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['access-instructions', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/property/access-instruction`,
        {
          params: { per_page: perPage, page: currentPage },
        }
      );
      return response.data;
    },
  });

  //   const accessInstructions = result?.data?.data?.data || accessInstructionData;

  const accessInstructions = accessInstructionData?.map((item) => ({
    ...item,
    path: `/my-systems/team/access-instructions/${item.id}`,
  }));

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
