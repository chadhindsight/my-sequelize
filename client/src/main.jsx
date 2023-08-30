import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root, {loader as baddieLoader} from "./routes/root";
import ErrorPage from "./routes/error-page";
import AddBaddie, {action as addBaddieAction} from "./routes/baddie/AddBaddie";
import Baddie from "./routes/baddie/Baddie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: baddieLoader,
    children: [
      {
        index:true,
      },
      // show single baddie
      {
        path: 'baddies/:baddieId',
        action: addBaddieAction,
        element: (<Baddie />)
      },
      // add new baddie entry
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