import { axiosPrivate, axiosPublic } from '@/lib/configs/axios.config';
import { useCallback, useEffect } from 'react';
import { useAuth } from './useAuth';

export function useAxios() {
  return axiosPublic;
}

export function useAxiosSecure() {
  const { logout, auth } = useAuth();
  const axios = useCallback(axiosPrivate, []);

  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (auth?.token) {
          config.headers.Authorization = `Bearer ${auth?.token}`;
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
            console.warn('Session expired. Logging out...');
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
  }, [axios, logout, auth]);

  return axios;
}
