import React, { Component } from "react";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
  Outlet,
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import RightSideBar from "./components/RightSidebar/RightSidebar";
import LeftSidebar from "./components/LeftSidebar/LeftSidebar";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";


class RouteComponent extends Component {
  render() {
    const currentUser = true;

    const Layout = () => {
      return (
        <div className="theme-light">
        <Navbar />
        <div style={{ display: "flex" }}>
          <LeftSidebar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightSideBar />
        </div>
      </div>
      );
    };

    const ProtectedRoute = ({ children }) => {
      if (!currentUser) {
        return <Navigate to={"/login"} />;
      }
      return children;
    };

    const router = createBrowserRouter([
      {
        path: "/",
        element: (
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        ),
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "/profile/:id",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]);

    return <RouterProvider router={router} />;
  }
}

export default RouteComponent;
