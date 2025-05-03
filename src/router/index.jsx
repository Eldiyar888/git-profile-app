import { createBrowserRouter } from "react-router-dom";
import Profile from "../pages/Profile";
import Repositories from "../pages/Repositories";
import Users from "../pages/Users";
import AppLayout from "../layout/AppLayout/AppLayout";
import PrivateRoute from "../components/auth/PrivateRoute";
import UserRepos from "../pages/UserRepos";
import Login from "../pages/Login/Login";
import Callback from "../pages/Callback/Callback";
import GuestLayout from "../layout/GuestLayout/GuestLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "callback", element: <Callback /> },
    ],
  },
  {
    path: "/",
    element: (
      <PrivateRoute>
        <AppLayout />
      </PrivateRoute>
    ),
    children: [
      { path: "profile", element: <Profile /> },
      { path: "repos", element: <Repositories /> },
      { path: "users", element: <Users /> },
      { path: "users/:login/repos", element: <UserRepos /> },
    ],
  },
]);
