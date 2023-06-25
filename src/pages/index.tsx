import FavoritesPage from "./favorites";
import HomePage from "./home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
]);

const Routing = () => {
  return <RouterProvider router={router} />;
};

export default Routing;
