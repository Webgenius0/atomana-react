import axiosConfig from "@/lib/axios.config";
import { useCallback, useEffect } from "react";

export function useAxios() {
  return axiosConfig;
}

export function useAxiosSecure() {
  const axios = useCallback(axiosConfig, []);

  useEffect(() => {
    axios.interceptors.request.use(
      (config) => {
        // Modify the request (e.g., add auth token)

        return config;
      },
      (error) => {
        console.log(error);
        return error;
      }
    );
  }, []);

  useEffect(() => {
    axios.interceptors.response.use(
      (res) => {
        return res;
      },
      (err) => {
        const status = err.response.status;
        if (status === 401 || status === 403) {
            
        }
      }
    );
  }, []);

  return axios;
}
