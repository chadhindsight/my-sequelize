import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root, { loader as baddiesLoader } from "./routes/root";
import ErrorPage from "./routes/error-page";
import AddBaddie, {
  action as addBaddieAction,
} from "./routes/baddie/AddBaddie";
import Baddie, { loader as baddieLoader } from "./routes/baddie/Baddie";
import { action as destroyBaddie } from "./routes/baddie/DeleteBaddies";
import UpdateBaddie, {
  action as UpdateBaddieAction,
} from "./routes/baddie/UpdateBaddie";
import Baddies, { loader as newLoader } from "./routes/baddie/Baddies";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: baddiesLoader,
    children: [
      {
        index: true,
      },
      {
        path: "baddies",
        element: <Baddies />,
        loader: newLoader,
      },
      // show single baddie, it has update and delete actions
      {
        path: "baddies/:baddieId",
        element: <Baddie />,
        loader: baddieLoader,
        action: destroyBaddie,
      },
      // add new baddie entry
      {
        path: "baddies/new",
        action: addBaddieAction,
        element: <AddBaddie />,
      },
      // update baddie
      {
        path: "baddies/:baddieId/update",
        action: UpdateBaddieAction,
        element: <UpdateBaddie />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
