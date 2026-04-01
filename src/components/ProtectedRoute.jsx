import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { data: user, isAuthChecked } = useSelector((store) => store.user);

  if (!isAuthChecked) {
    return null;
  }

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
