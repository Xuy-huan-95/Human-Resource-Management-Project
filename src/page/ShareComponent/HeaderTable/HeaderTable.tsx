import React from 'react';
import IconButton from '@mui/material/IconButton';
import { styled, useTheme } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

interface IHeaderTable {
    name: string
    handleDrawerOpen: () => void
    open: boolean
}

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));


const HeaderTable = (props: IHeaderTable | any) => {
    const { name, handleDrawerOpen, open } = props

    return (
        <div>
            <AppBar position="fixed" open={open} className='Appbar'>
                <Toolbar className='header'>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography>
                    </Typography>
                    <Typography variant="h6" noWrap component="div" className='user-info-header'>
                        <div className='icon-user'>
                            <AccountCircleIcon />
                        </div>
                        <div className='user-name'>
                            {name == "user" && "User"}
                            {name == "manage" && "Manage"}
                            {name == "manage2" && "Manage"}
                            {name == "manage3" && "Manage"}
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>

        </div>
    )
}

export default HeaderTable