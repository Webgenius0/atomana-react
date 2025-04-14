import errorResponse from '@/lib/errorResponse';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { stripHtml } from 'string-strip-html';
import { z } from 'zod';
import { useAxiosSecure } from './useAxios';

const noteSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  notes: z.string().refine(
    (value) => {
      const notes = DOMPurify.sanitize(stripHtml(value).result) || '';
      return !!notes.trim();
    },
    {
      message: 'Note is required',
    }
  ),
});

const passwordSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  website: z
    .string()
    .min(1, 'Website is required')
    .url('The website field must be a valid URL.'),
  user_name: z.string().min(1, 'Username is required'),
  email: z
    .string()
    .min(1, 'Email is required')
    .email({ message: 'Invalid Email' }),
  password: z.string().min(1, 'Password is required'),
  notes: z.string().optional(),
});

export const useGetNotes = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['notes'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/shared-note`);
      return response.data;
    },
  });

  return {
    ...result,
    notes: result?.data?.data,
  };
};

export const useGetSingleNote = (slug) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['note', slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/shared-note/single/${slug}`
      );
      return response.data;
    },
  });

  return {
    ...result,
    note: result?.data?.data,
  };
};

export const useCreateNote = () => {
  const axiosPrivate = useAxiosSecure();
  const form = useForm({
    resolver: zodResolver(noteSchema),
  });
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/shared-note/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        form.reset();
        queryClient.invalidateQueries(['notes']);
      }
    },
  });

  return { ...result, form };
};

export const useGetPasswordList = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['password-list'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/password-list`);
      return response.data;
    },
  });

  return {
    ...result,
    passwordList: result?.data?.data,
  };
};

export const useGetSinglePassword = (slug) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['password', slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/password-list/single/${slug}`
      );
      return response.data;
    },
  });

  return {
    ...result,
    passwordDetails: result?.data?.data,
  };
};

export const useAddPassword = () => {
  const axiosPrivate = useAxiosSecure();
  const form = useForm({
    resolver: zodResolver(passwordSchema),
  });
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/password-list/store`,
        payload
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data?.success) {
        form.reset();
        queryClient.invalidateQueries(['password-list']);
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
