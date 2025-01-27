import { createContext, useState } from "react";
import { axiosPublic } from "@/lib/configs/axios.config";
import useLocalStorage from "@/hooks/useLocalstorage";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [auth, setAuth, clearAuth] = useLocalStorage("auth", "");
  const [userData, setUserData, clearUserData] = useLocalStorage(
    "userData",
    ""
  );
  const [emailForOTP, setEmailForOTP] = useState("");

  const isLogged = !!auth && !!auth.token && !!userData && !!userData?.email;

  // Registration function with OTP email setting
  const signup = async (userData) => {
    const { data } = await axiosPublic.post("/api/v1/auth/register", userData);
    if (!data?.success) {
      throw new Error("Registration failed");
    }
    setEmailForOTP(userData.email);
  };

  // Verify OTP function
  const verifyOTP = async (otp) => {
    const { data } = await axiosPublic.post("/api/v1/auth/otp-match", {
      email: emailForOTP,
      otp,
    });
    if (!data?.success) {
      throw new Error("Verify failed");
    }
  };

  // Verify OTP function
  const sendOTP = async (otp) => {
    const { data } = await axiosPublic.post("/api/v1/auth/otp-send", {
      email: emailForOTP,
      otp,
    });
    if (!data?.success) {
      throw new Error("Sending otp failed");
    }
  };

  // Login function
  const login = async (credentials) => {
    const { data } = await axiosPublic.post("/api/v1/auth/login", credentials);
    if (!data?.success) {
      throw new Error(data?.message);
    }
    setAuth((prev) => ({ ...prev, accessToken: data.token }));
    setUserData((prev) => ({ ...prev, email: data?.user?.email }));
  };

  const logout = () => {
    clearAuth();
    clearUserData();
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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };
