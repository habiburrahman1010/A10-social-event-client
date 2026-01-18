import React, { useContext } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../pages/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContex);
  const location = useLocation();

  if (loading) return <Loading />; 

  if (user?.email) return children;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
