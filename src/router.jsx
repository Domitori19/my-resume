import { createBrowserRouter } from "react-router"; // импорт библиотеки
import Home from "@/pages/Home/Home"; // импорт компонента Home
import Layout from "@/components/Layout/Layout"; // импорт компонента Layout
import NotFoundPage from "./pages/NotFound/NotFoundPage";

export const router = createBrowserRouter([
  { path: "/test", element: <div>Test Page</div> },

  {
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
