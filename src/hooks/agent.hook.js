import errorResponse from "@/lib/errorResponse";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAxiosSecure } from "./useAxios";

export const useGetAgents = (page = 1, per_page = 10, search) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ["agents", page, per_page, search],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/admin/agent`, {params: {search, page, per_page}}
      );
      return response.data;
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
export const useGetSingleAgent = (slug) => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ["agent", slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(`/api/v1/admin/agent/${slug}`);
      return response.data;
    },
    keepPreviousData: true,
  });

  return {
    ...result,
    agent: result?.data?.data,
  };
};

export const useUpdateSingleAgent = (slug) => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm();

  const result = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(
        `/api/v1/admin/agent/${slug}`,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(["agent", slug]);
        queryClient.invalidateQueries(["agents"]);
        toast.success("Successfully Updated!");
        navigate("/profile/manage-team");
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

export const useRegisterAgent = () => {
  const axiosPrivate = useAxiosSecure();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const form = useForm({
    defaultValues: {
      // total_commission_this_contract_year: '0',
      role_id: 3,
    },
  });

  const result = useMutation({
    mutationFn: async (data) => {
      const response = await axiosPrivate.post(
        "/api/v1/auth/register-agent",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data;
    },

    onSuccess: (data) => {
      if (data?.success) {
        queryClient.invalidateQueries(["agents_admin"]);
        navigate("/profile/manage-team");
        form.reset();
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
