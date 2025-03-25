import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useAxiosSecure } from './useAxios';

// const noteSchema = z.object({
//   title: z.string().min(1, 'Title is required'),
//   notes: z.string().refine(
//     (value) => {
//       const notes = DOMPurify.sanitize(stripHtml(value).result) || '';
//       return !!notes.trim();
//     },
//     {
//       message: 'Note is required',
//     }
//   ),
// });

// const passwordSchema = z.object({
//   title: z.string().min(1, 'Title is required'),
//   website: z.string().min(1, 'Website is required'),
//   user_name: z.string().min(1, 'Username is required'),
//   email: z
//     .string()
//     .min(1, 'Email is required')
//     .email({ message: 'Invalid Email' }),
//   password: z.string().min(1, 'Password is required'),
//   notes: z.string().optional(),
// });

export const useGetChatHistory = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['chat-history'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/my-ai/chat`);
      return response.data;
    },
  });

  return {
    ...result,
    chatHistory: result?.data?.data,
  };
};

export const useGetSingleConversation = (id) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['chat', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/my-ai/chat/${id}`);
      return response.data;
    },
  });

  return {
    ...result,
    conversation: result?.data?.data?.data?.sort((a, b) => a.id - b.id),
  };
};

export const useCreateNewChat = () => {
  const axiosPrivate = useAxiosSecure();

  //   const form = useForm({
  //     resolver: zodResolver(noteSchema),
  //   });

  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(`/api/v1/my-ai/chat`, payload);
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        // form.reset();
        queryClient.invalidateQueries(['chat-history']);
      }
    },
  });

  return result;
};

export const useSendMessageToConversation = (id) => {
  const [message, setMessage] = useState('');
  const axiosPrivate = useAxiosSecure();

  const containerRef = useRef(null);

  const scrollToBottom = () => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    // Scroll to bottom on mount (initial load)

    scrollToBottom();
  }, [id]);

  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/my-ai/chat/${id}`,
        payload
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['chat', id]);
        setMessage('');
        scrollToBottom();
      }
    },
  });

  return { ...result, message, setMessage, containerRef, scrollToBottom };
};
