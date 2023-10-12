import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../utils/hooks";

const PrivateRoute = () => {
  const auth = useAuth()
  return auth ? <Outlet /> : <Navigate to="login" />;
};

export default PrivateRoute;
