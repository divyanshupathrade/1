import { Navigate } from "react-router-dom";
import useAuthState from "@/hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuthState();
  return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
