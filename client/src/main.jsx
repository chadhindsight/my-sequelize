import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import Placeholder, {loader as baddieLoader} from "./routes/baddie/Placholder";
import AddBaddie, {action as addBaddieAction} from "./routes/baddie/AddBaddie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <Placeholder/>,
        loader: baddieLoader,
      },
      {
        path: 'baddies/new',
        action: addBaddieAction,
        element: (<AddBaddie />)
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);