import { createContext, useState, useEffect } from "react";
import axiosConfig from "@/lib/axios.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken") || "");
  const [emailForOTP, setEmailForOTP] = useState("");

  useEffect(() => {
    if (accessToken) {
      axiosConfig.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    } else {
      delete axiosConfig.defaults.headers.common["Authorization"];
    }
  }, [accessToken]);

  // Registration function with OTP email setting
  const signup = async (userData) => {
    try {
      const response = await axiosConfig.post("/auth/register", userData);
      if (response.data.success) {
        setEmailForOTP(userData.email);
        return { success: true };
      }
      return { success: false, message: "Registration failed" };
    } catch (error) {
      console.error("Registration failed:", error);
      return { success: false, message: error.message };
    }
  };

  // Verify OTP function
  const verifyOTP = async (otp) => {
    try {
      const response = await axiosConfig.post("/auth/verify-otp", { email: emailForOTP, otp });
      if (response.data.success) {
        return { success: true };
      }
      return { success: false, message: "OTP verification failed" };
    } catch (error) {
      console.error("OTP verification failed:", error);
      return { success: false, message: error.message };
    }
  };

  // Login function
  const login = async (credentials) => {
    try {
      const response = await axiosConfig.post("/auth/login", credentials);
      setAccessToken(response.data.accessToken);
      localStorage.setItem("accessToken", response.data.accessToken);
      setUser(response.data.user);
      return { success: true };
    } catch (error) {
      console.error("Login failed:", error);
      return { success: false, message: error.message };
    }
  };

  const logout = () => {
    setAccessToken("");
    setUser(null);
    localStorage.removeItem("accessToken");
  };

  return (
    <AuthContext.Provider value={{ user, signup, verifyOTP, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
