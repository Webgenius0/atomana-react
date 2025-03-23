import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import { useAxiosSecure } from "./useAxios";

export const useGetVendorcategory = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const response = await axiosPrivate.get("/api/v1/vendor-category");
      return response.data;
    },
  });

  const categories = result?.data?.data;
  return { ...result, categories };
};

export const useCreateVendor = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(`/api/v1/vendor/store`, payload);
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      alert(error?.response?.data?.message);
    },
  });

  return result;
};

export const useVendorCategoryDetails = (slug) => {
  const axiosPrivate = useAxiosSecure();

  return useQuery({
    queryKey: ["vendorCategory", slug],
    queryFn: async () => {
      const response = await axiosPrivate.get(
        `/api/v1/vendor-category/single/${slug}`
      );
      return response.data?.data;
    },
    enabled: !!slug,
  });
};
