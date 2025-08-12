import { createBrowserRouter, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";

const Login = lazy(() => import("../page/Login"));
const PageNotFound = lazy(() => import("../components/PageNotFound"));

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    path: "/login",
    element: (
      <Suspense fallback="loading...">
        <Login />
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
]);
