import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Auth from "./Components/Auth/Auth";
import Login from "./Components/Login/Login";
import Layout from "./Components/Layout/Layout";
import Users from "./Components/Users/Users";
import AddUsers from "./Components/AddUsers/AddUsers";
import Notfound from "./Components/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Auth />,
      errorElement: <Notfound />,

      children: [
        { index: true, element: <Login /> },
        { path: "login", element: <Login /> },
      ],
    },
    {
      path: "dashboard",
      element: <Layout />,
      errorElement: <Notfound />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "dashboard", element: <Dashboard /> },
        { path: "users", element: <Users /> },
        { path: "add-users", element: <AddUsers /> },
        { path: "update-users", element: <AddUsers /> },
        { path: "profile", element: <AddUsers /> },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer />
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
