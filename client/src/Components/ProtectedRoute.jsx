import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return (
      <Navigate
        to="/login"
        replace
        state={{ fromProtected: true }}
      />
    );
  }

  return children;
};

export default ProtectedRoute;
