import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import GeneralContext from "./GeneralContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useContext(GeneralContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;