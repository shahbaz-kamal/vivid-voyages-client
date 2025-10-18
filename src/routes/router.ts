import App from "@/App";
import DashboardLayout from "@/components/layouts/DashboardLayout";

import About from "@/pages/About";
import AddTour from "@/pages/Admin/AddTour";
import Analytics from "@/pages/Admin/Analytics";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Bookings from "@/pages/User/Bookings";
import Verify from "@/pages/Verify";

import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        path: "/about",
        Component: About,
      },
    ],
  },
  {
    path: "/admin",
    Component: DashboardLayout,
    children: [
      { Component: Analytics, path: "analytics" },
      { Component: AddTour, path: "add-tour" },
      { Component: AddTour, path: "add-tour-type" },
    ],
  },
  {
    path: "/user",
    Component: DashboardLayout,
    children: [{ Component: Bookings, path: "bookings" }],
  },
  {
    Component: Login,
    path: "/login",
  },
  {
    Component: Register,
    path: "/register",
  },
  {
    Component: Verify,
    path: "/verify",
  },
]);
