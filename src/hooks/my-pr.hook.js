import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { useAxiosSecure } from './useAxios';

export const useGetChatHistory = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ['chat-history-pr'],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/my-pr/chat`);
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
    queryKey: ['chat-pr', id],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/my-pr/chat/${id}`);
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
      const response = await axiosPrivate.post(`/api/v1/my-pr/chat`, payload);
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['chat-history-pr']);
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
        `/api/v1/my-pr/chat/${id}`,
        payload
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(['chat-pr', id]);
        setMessage('');
        scrollToBottom();
      }
    },
  });

  return { ...result, message, setMessage, containerRef, scrollToBottom };
};
