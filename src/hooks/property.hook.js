import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

// const formSchema = z.object({
//   email: z
//     .string()
//     .min(1, 'Email is required')
//     .email({ message: 'Invalid Email' }),
//   address: z.string().min(1, 'Address is required'),
//   price: z
//     .string()
//     .min(1, 'Price is required')
//     .refine((value) => !isNaN(Number(value)), { message: 'Invalid Price' }),
//   expiration_date: z.preprocess((value) => {
//     if (!value) return null;
//     try {
//       const date = new Date(value);
//       return isNaN(date.getTime()) ? null : format(date, 'yyyy-MM-dd');
//     } catch {
//       return null;
//     }
//   }, z.string({ required_error: 'Expiration date is required' })),
//   is_development: z.enum(['1', '0'], {
//     // Changed from 'development' to match form
//     required_error: 'This field is required',
//   }),
//   add_to_website: z.enum(['1', '0'], {
//     required_error: 'This field is required',
//   }),
//   commission_rate: z.preprocess(
//     (val) => {
//       if (val === '') return undefined;
//       const num = parseFloat(val);
//       return isNaN(num) ? val : num;
//     },
//     z
//       .number({
//         required_error: 'Commission rate is required',
//         invalid_type_error: 'Must be a valid number',
//       })
//       .min(0, 'Must be positive')
//       .max(100, 'Cannot exceed 100%')
//   ),
//   is_co_listing: z.enum(['1', '0'], {
//     required_error: 'Co-listing is required',
//   }),
//   co_agent: z.preprocess((val) => {
//     if (val === '') return undefined;
//     return Number(val);
//   }, z.number().optional()),
//   co_list_percentage: z.preprocess(
//     (val) => {
//       if (val === '') return undefined;
//       const num = parseFloat(val);
//       return isNaN(num) ? val : num;
//     },
//     z
//       .number({
//         required_error: 'Co-listing percentage is required',
//         invalid_type_error: 'Must be a valid number',
//       })
//       .min(0, 'Must be positive')
//       .max(100, 'Cannot exceed 100%')
//   ),
//   property_source_id: z.preprocess(
//     (val) => {
//       if (val === '') return undefined;
//       return Number(val);
//     },
//     z.number({
//       required_error: 'Property Source is required',
//     })
//   ),
//   beds: z.string().min(1, 'Beds is required'),
//   full_baths: z.string().min(1, 'Full baths is required'),
//   half_baths: z.string().min(1, 'Half baths is required'),
//   size: z.string().min(1, 'Size is required'),
//   link: z.string().min(1, 'Link is required'),
//   note: z.string().min(1, 'Note is required'),
// });

export const useGetProperties = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['properties'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/property/dropdown');
      return response.data;
    },
  });

  const properties = result?.data?.data;
  return { ...result, properties };
};

export const useStoreProperty = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const form = useForm({
    defaultValues: {
      address: '',
      price: '',
      expiration_date: '',
      is_development: '0',
      commission_rate: '',
      is_co_listing: '0',
      co_agent: null,
      co_list_percentage: '',
      property_source_id: '',
      beds: '',
      full_baths: '',
      half_baths: '',
      size: '',
      link: '',
      note: '',
    },
    // resolver: zodResolver(formSchema),
  });

  const result = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(`/api/v1/property/store`, data);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success('Listing Form Created Successfully');
        queryClient.invalidateQueries(['properties']);
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

// new listing source dropdown hook
export const useSourceDropdown = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['sources'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/property/source');
      return response.data;
    },
  });

  const sources = result?.data?.data;
  return { ...result, sources };
};

// new listing form co-listing dropdown hook
export const useCoListAgentDropdown = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['co-listing'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/user/agent/co-list');
      return response.data;
    },
  });

  const coAgents = result?.data?.data;

  return { ...result, coAgents, isLoading: result.isLoading };
};
