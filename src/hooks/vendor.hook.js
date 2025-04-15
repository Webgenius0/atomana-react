import errorResponse from '@/lib/errorResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { useAxiosSecure } from './useAxios';

// Define the schema with proper validation
const vendorListSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be less than 100 characters'),
  icon: z
    .any()
    .refine((files) => files?.length === 1, 'Image is required')
    .refine(
      (files) => files?.[0]?.size <= 5_000_000, // 5MB
      'Max image size is 5MB'
    )
    .refine(
      (files) =>
        ['image/jpeg', 'image/png', 'image/webp'].includes(files?.[0]?.type),
      'Only .jpg, .png, and .webp formats are supported'
    ),
});

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

export const useCreateVendorCategories = () => {
  const [open, setOpen] = useState(false);
  const queryClient = useQueryClient();
  const axiosPrivate = useAxiosSecure();
  const form = useForm({
    resolver: zodResolver(vendorListSchema),
    defaultValues: {
      name: '',
      icon: undefined,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      const res = await axiosPrivate.post(
        `/api/v1/vendor-category/store`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      return res.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        toast.success(data.message || 'Category Created Successfully.');
        setOpen(false);
        queryClient.invalidateQueries(['categories']);
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

  return { mutate, isPending, open, setOpen, form };
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
