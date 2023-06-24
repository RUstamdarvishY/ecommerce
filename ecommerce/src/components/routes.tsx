import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./MainPage/HomePage";
import Products from "./ProductsPage/Products";
import ProductDetail from "./ProductDetailPage/ProductDetail";
import ErrorPage from "./ErrorPage";
import Cart from "./Order/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "корзина/", element: <Cart /> },
      {
        path: ":slug/",
        element: <Products />,
        children: [
          {
            path: ":id/",
            element: <ProductDetail />,
          },
        ],
      },
    ],
  },
]);

export default router;
