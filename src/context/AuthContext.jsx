import { createContext, useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load user from local storage
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      axiosInstance.get('/auth/me')
        .then(response => setUser(response.data))
        .catch(() => localStorage.removeItem('token'));
    }
    setLoading(false);
  }, []);

  // Sign In
  const signIn = async (email, password) => {
    try {
      const response = await axiosInstance.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setUser(response.data.user);
      axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
    } catch (error) {
      throw error.response.data.message || 'Sign In failed';
    }
  };

  // Sign Up
  const signUp = async (userData) => {
    try {
      await axiosInstance.post('/auth/register', userData);
    } catch (error) {
      throw error.response.data.message || 'Sign Up failed';
    }
  };

  // Email Verification (OTP)
  const verifyOTP = async (email, otp) => {
    try {
      await axiosInstance.post('/auth/verify-otp', { email, otp });
    } catch (error) {
      throw error.response.data.message || 'OTP Verification failed';
    }
  };

  // Forgot Password
  const forgotPassword = async (email) => {
    try {
      await axiosInstance.post('/auth/forgot-password', { email });
    } catch (error) {
      throw error.response.data.message || 'Failed to send reset link';
    }
  };

  // Sign Out
  const signOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    delete axiosInstance.defaults.headers.common['Authorization'];
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signUp, verifyOTP, forgotPassword, signOut, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
