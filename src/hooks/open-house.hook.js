import errorResponse from '@/lib/errorResponse';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useAxiosSecure } from './useAxios';

export const useOpenHouse = () => {
  const axiosPrivate = useAxiosSecure();
  const form = useForm({
    defaultValues: {
      property_id: '',
      wavy_man: '1',
      date: '',
      start_time: '',
      end_time: '',
      sign_number: '',
    },
  });

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/open-house/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
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

export const useOpenHouseFeedback = () => {
  const axiosPrivate = useAxiosSecure();
  const form = useForm({
    defaultValues: {
      open_house_id: '',
      people_count: '',
      feedback: '',
      additional_feedback: '',
    },
  });

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/open-house/feedback/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
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

export const usePropertyDropdown = () => {
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

export const usePropertyTypeDropdown = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['property_types'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/property/type');
      return response.data;
    },
  });

  const propertyTypes = result?.data?.data;
  return { ...result, propertyTypes };
};

export const useOpenHouseFeedbackDropdown = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['propertyid'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/open-house/dropdown');
      return response.data;
    },
  });

  const propertyid = result?.data?.data;
  return { ...result, propertyid, isLoading: result.isLoading };
};

export const useGetOpenHouses = ({ perPage = 10, currentPage = 1 }) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['open-houses', perPage, currentPage],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/property`, {
        params: { per_page: perPage, page: currentPage },
      });
      return response.data;
    },
  });

  const openHouses = result?.data?.data?.data?.map((item) => ({
    ...item,
    path: `/my-systems/open-house/${item.id}`,
  }));

  console.log(openHouses);

  const isLoading = false;
  const current_page = result?.data?.data?.current_page;
  const totalItems = result?.data?.data?.total || 50;
  const per_page = result?.data?.data?.per_page;

  return {
    ...result,
    openHouses,
    current_page,
    totalItems,
    per_page,
    isLoading,
  };
};
