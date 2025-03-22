import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAxiosSecure } from "./useAxios";

export const useOpenHouse = () => {
  const axiosPrivate = useAxiosSecure();

  const result = useMutation({
    mutationFn: async (payload) => {
      const response = await axiosPrivate.post(
        `/api/v1/open-house/store`,
        payload
      );
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
