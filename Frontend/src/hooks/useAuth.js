import { useAuth } from "@/context/AuthContext";

const useAuthState = () => {
  return useAuth();
};

export default useAuthState;
