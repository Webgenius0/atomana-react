import { useMutation, useQuery } from '@tanstack/react-query';
import { useAxiosSecure } from './useAxios';

export const useOpenHouse = () => {
  const axiosPrivate = useAxiosSecure();

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
      alert(error?.response?.data?.message);
    },
  });

  return result;
};

export const useOpenHouseFeedback = () => {
  const axiosPrivate = useAxiosSecure();

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
      alert(error?.response?.data?.message);
    },
  });

  return result;
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
