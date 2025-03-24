import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import DOMPurify from 'dompurify';
import { useForm } from 'react-hook-form';
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
