import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAxiosSecure } from './useAxios';

export const useGetVendorCategories = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await axiosPrivate.get('/api/v1/vendor-category');
      return response.data;
    },
  });

  const categories = result?.data?.data;

  console.log({ categories });
  return { ...result, categories };
};

export const useCreateVendor = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(`/api/v1/vendor/store`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['vendor-list']);
        navigate('/my-systems/vendor-list/');
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};

export const useGetVendorCategoryDetails = (slug) => {
  const axiosPrivate = useAxiosSecure();

  return useQuery({
    queryKey: ['vendorCategory', slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/vendor-category/single/${slug}`
      );
      return response.data?.data;
    },
    enabled: !!slug,
  });
};

export const useGetVendorList = (slug) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['vendor-list'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/vendor`);
      return response.data;
    },
  });

  const vendorList = result?.data?.data?.filter(
    (item) => item?.category?.slug === slug
  );

  return { ...result, vendorList };
};

export const useGetSingleVendor = (slug) => {
  const [searchQuery, setSearchQuery] = useState('');
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['vendor', slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/vendor/single/${slug}`);
      return response.data;
    },
  });

  const vendorDetails = result?.data?.data;

  const reviews = vendorDetails?.reviews?.filter(
    (review) =>
      review?.comment?.toLowerCase()?.includes(searchQuery.toLowerCase()) ||
      review?.user_name?.toLowerCase()?.includes(searchQuery.toLowerCase())
  );

  return { ...result, vendorDetails, reviews, searchQuery, setSearchQuery };
};

export const useCreateVendorReview = (slug) => {
  const form = useForm();
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosSecure();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/vendor-review/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['vendor', slug]);
        form.reset();
        setOpen(false);
      }
    },
  });

  return { ...result, open, setOpen, form };
};
