import React, { useEffect } from 'react'
import './App.css'
import { RouterProvider, redirect } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { refreshUser } from "./redux/slice/login.slice"
import { GetPermisson } from "./redux/slice/CheckPermission.slice"
import { useAppDispatch, useAppSelector } from "./redux/hook";
import Routes from "./routes"

const App = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const Permission = localStorage.getItem("permissson");
    let dataRefesh = JSON.parse(user as string)
    dispatch(refreshUser(dataRefesh))
    dispatch(GetPermisson(Permission))

  }, [])



  return (
    <>
      <RouterProvider router={Routes} />
      <ToastContainer theme='colored' />
    </>

  )
}

export default App
