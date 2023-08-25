import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./routes/error-page";
import BaddieList, {loader as baddieLoader} from "./routes/baddie/BaddieList";
import AddBaddie, {action as addBaddieAction} from "./routes/baddie/AddBaddie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        element: <BaddieList/>,
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