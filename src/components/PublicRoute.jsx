import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { data: user, isAuthChecked } = useSelector((store) => store.user);

  if (!isAuthChecked) {
    return null;
  }

  return user ? <Navigate to="/browse" replace /> : children;
};

export default PublicRoute;
