import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
  children: ReactNode;
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ children }) => {
  // Check if token exists in localStorage
  const token = localStorage.getItem("token");

  return <>{token ? children : <Navigate to="/login" replace={true} />}</>;
};

export default ProtectedRoutes;
