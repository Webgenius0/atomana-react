import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useAxiosSecure } from './useAxios';

export const useGetChatHistory = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['chat-history-ai'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/v1/my-ai/chat`);
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
    queryKey: ['chat-ai', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/v1/my-ai/chat/${id}`);
      return response.data;
    },
    enabled: !!id,
  });

  return {
    ...result,
    conversation: result?.data?.data?.data?.sort((a, b) => a.id - b.id) || [],
  };
};

export const useCreateNewChat = () => {
  const axiosPrivate = useAxiosSecure();

  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(`/v1/my-ai/chat`, payload);
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['chat-history-ai']);
      }
    },
  });

  return { newChat: result?.data?.data, ...result };
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
        `/v1/my-ai/chat/${id}`,
        payload
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['chat-ai', id]);
        setMessage('');
        scrollToBottom();
      }
    },
  });

  return { ...result, message, setMessage, containerRef, scrollToBottom };
};

export const useDeleteChat = () => {
  const [open, setOpen] = useState(false);
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();

  const result = useMutation({
    mutationFn: async (id) => {
      const response = await axiosPrivate.delete(`/v1/my-ai/chat/${id}`);
      return response.data;
    },

    onSuccess: async (data, id) => {
      if (data?.success) {
        setOpen(false);
        await queryClient.invalidateQueries(['chat-history-ai']);
        queryClient.setQueryData(['chat-ai', id], () => []);
      }
    },
  });

  return { ...result, open, setOpen };
};
