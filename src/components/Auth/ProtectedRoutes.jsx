import React from "react";

import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth();

  const location = useLocation();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        {" "}
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>{" "}
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname,
        }}
        replace
      />
    );
  }

  return children;
};
export default ProtectedRoute;
