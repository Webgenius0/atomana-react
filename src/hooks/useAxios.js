import axiosConfig from "@/lib/axios.config";

export function useAxios() {
  const axios = axiosConfig;
  return axios;
}
