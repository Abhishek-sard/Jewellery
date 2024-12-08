import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loader from "../../components/Loader";
import "../../index.css"
export default function ProtectedRoutes({ children }) {
  const { user, isAuthenticated, isLoading } = useSelector((state) => state.auth);

  if (isLoading) {
    return <Loader />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user?.role_name !== "admin") {
    return <Navigate to="/" replace />;
  }
  

  return children;
}