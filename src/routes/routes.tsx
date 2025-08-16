import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import AppLayout from "../layout/AppLayout";
import ProtectedRoute from "../layout/ProtectedRoute";
import PublicRoute from "../layout/PublicRoute";

const Login = lazy(() => import("../page/Login"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));
const SignupPage = lazy(() => import("../page/Signup"));
const Dashboard = lazy(() => import("../page/Dashboard"));
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback="loading...">
        <PublicRoute>
          <Login />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback="loading...">
        <PageNotFound />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense fallback="loading...">
        <PublicRoute>
          <SignupPage />
        </PublicRoute>
      </Suspense>
    ),
  },
  {
    path: "/app",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);
