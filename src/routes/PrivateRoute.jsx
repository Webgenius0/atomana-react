import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { userData } = useAuth();
  return userData ? children : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
