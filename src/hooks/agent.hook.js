import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxios";

export const useGetAgents = (page = 1, perPage = 10) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ["agents", page],
    queryFn: async () => {
      try {
        const response = await axiosPrivate.get(
          `/api/v1/admin/agent?page=${page}&per_page=${perPage}`
        );
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch agents"
        );
      }
    },
    keepPreviousData: true,
  });

  return {
    ...result,
    agents: result?.data?.data?.data || [],
    totalPages: result?.data?.data?.last_page || 1,
    currentPage: result?.data?.data?.current_page || 1,
  };
};

export const useRegisterAgent = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const { auth } = useAuth();

  return useMutation({
    mutationFn: async ({ formData }) => {
      const response = await axiosPrivate.post(
        "/api/v1/auth/register-agent",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${auth?.token}`,
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(["agents_admin"]);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message || "Something went wrong");
    },
  });
};
