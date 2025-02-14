import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxios";
import { useAuth } from "./useAuth";

export const useGetAgents = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ["agents"],
    queryFn: async () => {
      try {
        const response = await axiosPrivate.get("/api/v1/admin/agent");
        return response.data;
      } catch (error) {
        throw new Error(
          error.response?.data?.message || "Failed to fetch agents"
        );
      }
    },
  });

  return { ...result, agents: result?.data?.data };
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
        queryClient.invalidateQueries(["agents"]);
      }
    },
    onError: (error) => {
      alert(error?.response?.data?.message || "Something went wrong");
    },
  });
};
