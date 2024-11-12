import { createBrowserRouter } from "react-router-dom";
import Login from "../components/Login";
import Profile from "../components/Profile";
import SignUp from "../components/SignUp";
import Home from "../pages/Home";
import Root from "./../layouts/Root";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/profile",
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>,
      },
    ],
  },
]);

const Router = () => {
  return <div></div>;
};

export default Router;
