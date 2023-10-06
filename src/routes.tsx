import {
  createBrowserRouter,
} from "react-router-dom";
import Login from "./page/login/Login"
import Manage from "./page/Component/Table/Manage"
import NotFound from "./page/ShareComponent/NotFound/NotFound"
import React from "react";
import ProtectRouter from "./ProtectRouter/ProtectRouter"
import RouterAfterLogin from "./ProtectRouter/RouterAfterLogin"
const Routes = createBrowserRouter([

  {
    path: '/manageuser/:id',
    element:
      <ProtectRouter>
        <Manage />
      </ProtectRouter>

  },
  {
    path: '/',
    element:
      <RouterAfterLogin>
        <Login />
      </RouterAfterLogin>
  },
  {
    path: '*',
    element: <NotFound />
  }
])

export default Routes
