import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./MainPage/HomePage";
import ProductsPage from "./ProductsPage/ProductsPage";
import ProductDetail from "./ProductDetailPage/ProductDetail";
import ErrorPage from "./ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage/>,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":slug/",
        element: <ProductsPage />,
        children: [{ path: ":id/", element: <ProductDetail /> }],
      },
    ],
  },
]);

export default router;