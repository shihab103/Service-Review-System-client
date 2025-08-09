import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import SignIn from "./components/SignIn/SignIn.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import AuthProvider from "./contexts/AuthProvider.jsx";
import PrivateRoute from "./routes/PrivateRoute.jsx";
import AddServices from "./components/Add Services/AddServices.jsx";
import Home from "./components/Home/Home.jsx";
import AllServices from "./components/All Services/AllServices.jsx";
import axios from "axios";
import MyServices from "./components/My Services/MyServices.jsx";
import SeeDetails from "./components/All Services/SeeDetails.jsx";
import UpdateServices from "./components/My Services/UpdateServices.jsx";
import MyReviews from "./components/MyReview/MyReviews.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import DashboardLayout from "./layouts/DashboardLayout.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import About from "./Pages/About/About.jsx";
import ContactUs from "./Pages/ContactUs/ContactUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => axios(`${import.meta.env.VITE_API_URL}/service`),
        Component: Home,
      },
      {
        path: "/AllServices",
        loader: () => axios(`${import.meta.env.VITE_API_URL}/service`),
        Component: AllServices,
      },
      {
        path:'/about',
        Component: About,
      },
      {
        path:'/contact',
        Component: ContactUs,
      },
      {
        path: "/services/:id",
        Component:SeeDetails
      },
      {
        path: "/signin",
        Component: SignIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      { index: true, Component: Dashboard },
      {
        path: "AddServices",
        Component: AddServices,
      },
      {
        path: "MyServices/:email",
        Component: MyServices,
      },
      {
        path: "updateServices/:id",
        Component: UpdateServices,
      },
      {
        path: "my-reviews",
        Component: MyReviews,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
