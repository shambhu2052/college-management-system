import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuth } = useAuth();
  return <>{isAuth ? <div>{children}</div> : <Navigate to="/" replace />}</>;
}
