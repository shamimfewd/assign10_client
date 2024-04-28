import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllArtAndCraft from "../Pages/AllArtAndCraft/AllArtAndCraft";
import AddCarftItem from "../Pages/AddCartItem/AddCarftItem";
import MyArtList from "../Pages/MyArtList/MyArtList";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import PrivateRoutes from "../PrivateRouters/PrivateRoutes";
import DetailsPage from "../Pages/DetailsPage/DetailsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft />,
        loader: () => fetch("http://localhost:5000/item"),
      },
      {
        path: "/addCraftItem",
        element: (
          <PrivateRoutes>
            <AddCarftItem />
          </PrivateRoutes>
        ),
      },

      {
        path: "/myArt&CraftList",
        element: (
          <PrivateRoutes>
            <MyArtList />
          </PrivateRoutes>
        ),
      },

      {
        path: "/detailspage/:id",
        element: (
          <PrivateRoutes>
            <DetailsPage />
          </PrivateRoutes>
        ),
        loader: () => fetch("http://localhost:5000/item"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
