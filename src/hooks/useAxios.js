import axiosConfig from "@/lib/axios.config";
import { useCallback, useEffect } from "react";
import { useAuth } from "./useAuth";

export function useAxios() {
  return axiosConfig;
}

export function useAxiosSecure() {
  const { logout } = useAuth();
  const axios = useCallback(axiosConfig, []);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        const token = localStorage.getItem("accessToken");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    const responseInterceptor = axios.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          const status = error.response.status;

          if (status === 401 || status === 403) {
            console.warn("Session expired. Logging out...");
            logout();
          }
        }
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
      axios.interceptors.response.eject(responseInterceptor);
    };
  }, [axios, logout]);

  return axios;
}
