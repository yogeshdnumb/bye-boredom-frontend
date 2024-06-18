import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "@features/Layout/Layout";
import Home from "@features/Home/Home";
import Chat from "./features/Chat/Chat";
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home></Home> },
      { path: ":chatType/:chatName", element: <Chat /> },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
