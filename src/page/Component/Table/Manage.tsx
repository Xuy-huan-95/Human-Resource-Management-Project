import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import "./Manage.scss"
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { logout } from "../../../redux/slice/login.slice"
import { GetPermisson } from "../../../redux/slice/CheckPermission.slice"
import HeaderComponent from "../../ShareComponent/HeaderComponent/HeaderComponent"
import Sidebar from "../../ShareComponent/Sidebar/Sidebar"
import CenterComponent from "../../ShareComponent/CenterComponent/CenterComponent"
import { styled } from '@mui/material/styles';
import React from 'react';


const drawerWidth = 240;
const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));


const Manage = () => {
  let { id } = useParams()
  const value = parseInt(id as string)
  const [selectedIndex, setSelectedIndex] = useState(value ? value : 1);
  const name = useAppSelector((state) => state.permission.name)
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleListItemClick = (index: number) => {
    setSelectedIndex(index);
  };

  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogout = async () => {
    localStorage.removeItem("user")
    localStorage.removeItem("permissson")
    dispatch(logout())
    dispatch(GetPermisson(""))
    navigate("/")
  }
  return (
    <Box sx={{ display: 'flex' }} >
      <CssBaseline />
      <HeaderComponent
        name={name}
        handleDrawerOpen={handleDrawerOpen}
        open={open}
      />
      <Sidebar
        open={open}
        handleDrawerClose={handleDrawerClose}
        name={name}
        handleLogout={handleLogout}
        selectedIndex={selectedIndex}
        handleListItemClick={handleListItemClick}
      />
      <Main open={open} className='right-tabs'>
        <CenterComponent
          name={name}
          selectedIndex={selectedIndex}
        />
      </Main>
    </Box >
  );
}

export default Manage
