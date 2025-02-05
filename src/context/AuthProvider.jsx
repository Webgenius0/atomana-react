import useLocalStorage from '@/hooks/useLocalstorage';
import { axiosPublic } from '@/lib/configs/axios.config';
import { createContext, useState } from 'react';

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth, clearAuth] = useLocalStorage('auth', '');
  const [userData, setUserData, clearUserData] = useLocalStorage(
    'userData',
    ''
  );
  const [emailForOTP, setEmailForOTP] = useState('');

  const isLogged = !!auth && !!auth.token && !!userData && !!userData?.email;

  // Registration function with OTP email setting
  const signup = async (userData) => {
    const { data } = await axiosPublic.post('/api/v1/auth/register', userData);
    if (!data?.success) {
      throw new Error('Registration failed');
    }
    setEmailForOTP(userData.email);
    setAuth(data.data.token);
  };

  // Verify OTP function
  const verifyOTP = async (otp) => {
    const payload = {
      otp,
      email: emailForOTP,
      operation: 'email',
    };

    try {
      const { data } = await axiosPublic.post(
        '/api/v1/auth/otp-match',
        payload,
        {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        }
      );

      if (!data?.success) {
        throw new Error('Verify failed');
      }
    } catch (error) {
      console.error(
        'Error verifying OTP:',
        error.response?.data || error.message
      );
      throw error;
    }
  };

  // resend OTP function
  const sendOTP = async () => {
    const payload = {
      email: emailForOTP,
      operation: 'email',
    };
    const { data } = await axiosPublic.post('/api/v1/auth/otp-send', payload, {
      headers: {
        Authorization: `Bearer ${auth}`,
      },
    });
    if (!data?.success) {
      throw new Error('Sending otp failed');
    }
  };

  // Login function
  const login = async (credentials) => {
    const { data } = await axiosPublic.post('/api/v1/auth/login', credentials);
    if (!data?.success) {
      throw new Error(data?.message);
    }

    if (!data?.data?.verify) {
      setEmailForOTP(credentials.email);
      await sendOTP();
      return data;
    }

    setAuth((prev) => ({ ...prev, accessToken: data.token }));
    setUserData((prev) => ({ ...prev, user: data?.data?.user }));

    return data;
  };

  const logout = () => {
    clearAuth();
    clearUserData();
  };

  const sendForgetPasswordOTP = async (email) => {
    const payload = {
      email,
      operation: 'password',
    };

    const { data } = await axiosPublic.post(
      '/api/v1/auth/forget-password/otp-send',
      payload
    );

    if (!data?.success) {
      throw new Error('Sending otp failed');
    }

    setEmailForOTP(email);
  };

  const verifyForgetPasswordOTP = async (otp) => {
    const payload = {
      otp,
      email: emailForOTP,
      operation: 'password',
    };

    try {
      const { data } = await axiosPublic.post(
        '/api/v1/auth/forget-password/otp-match',
        payload
      );

      if (!data?.success) {
        throw new Error('Verify failed');
      }
    } catch (error) {
      console.error(
        'Error verifying OTP:',
        error.response?.data || error.message
      );
      throw error;
    }
  };

  const resetPassword = async (credentials) => {
    const payload = {
      email: emailForOTP,
      ...credentials,
    };

    try {
      const { data } = await axiosPublic.post(
        '/api/v1/auth/forget-password/reset-password',
        payload
      );

      if (!data?.success) {
        throw new Error('Password reset failed');
      }
    } catch (error) {
      console.error(
        'Error reset password:',
        error.response?.data || error.message
      );
      throw error;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        userData,
        signup,
        verifyOTP,
        sendOTP,
        auth,
        isLogged,
        login,
        logout,
        sendForgetPasswordOTP,
        verifyForgetPasswordOTP,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
