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
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import SubCategory from "../Components/SubCategory";
// import CategoryItems from "../Pages/CategoryItems/CategoryItems";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("https://b9-assignment-10-server-sooty.vercel.app/item"),
      },
      {
        path: "/allArtAndCraft",
        element: <AllArtAndCraft />,
        loader: () => fetch("https://b9-assignment-10-server-sooty.vercel.app/item"),
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
        loader: () => fetch("https://b9-assignment-10-server-sooty.vercel.app/item"),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/updatePage/:id",
        element: (
          <PrivateRoutes>
            <UpdatePage />
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`https://b9-assignment-10-server-sooty.vercel.app/itemData/${params.id}`),
      },

      {
        path: "/subCategory",
        element: <SubCategory />,
        loader: () => fetch("https://b9-assignment-10-server-sooty.vercel.app/cate"),
      },
      // {
      //   path: "/categoryItems",
      //   element: <CategoryItems />,
      //   loader: () =>
      //     fetch(`http://localhost:5000/cate`),
      // },
    ],
  },
]);
