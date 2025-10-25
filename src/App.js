import ReactDOM from "react-dom/client";
import Navbar from "./component/Navbar";
import { ProductCard } from "./component/ProductCard";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Kid from "./component/Kid";
import Men from "./component/Men";
import Women from "./component/Women";
import Cart from "./component/Cart";
import Error from "./component/Error";
import ProductDetails from "./component/ProductDetails";
// import About from "./component/About";
// import Grocery from "./component/Grocery";
import { lazy, Suspense } from "react";

const Grocery = lazy(() => import("./component/Grocery"));
const About = lazy(() => import("./component/About"));

const App = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <ProductCard />,
      },
      {
        path: "/kid",
        element: <Kid />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
