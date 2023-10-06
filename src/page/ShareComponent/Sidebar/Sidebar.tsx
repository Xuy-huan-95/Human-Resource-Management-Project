import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { styled, useTheme } from '@mui/material/styles';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import InfoIcon from '@mui/icons-material/Info';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ListItemText from '@mui/material/ListItemText';
import KeyboardAltIcon from '@mui/icons-material/KeyboardAlt';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useNavigate } from 'react-router-dom';
import { STATUS_All } from "../Constants/StatusIfomation"

interface ISidebar {
    open: boolean
    handleDrawerClose: () => void
    name: string
    handleLogout: () => Promise<void>
    selectedIndex: number
    handleListItemClick: (index: number) => void
}

const Sidebar = (props: ISidebar | any) => {
    const navigate = useNavigate()
    const { open, handleDrawerClose, name, handleLogout, selectedIndex, handleListItemClick } = props
    const drawerWidth = 240;
    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));
    const theme = useTheme();
    const StyledList = styled(List)({
        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
            backgroundColor: '#ab9e9e',
            '&, & .MuiListItemIcon-root': {
                color: 'white',
            },
        },
    });
    return (
        <div>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <div className='company'> OceanTech</div>
                <div className='info-user'>
                    <div className='avata'>
                        <AccountCircleIcon />
                    </div>
                    <div className='name-user'>
                        <b>
                            {name == "user" && "User"}
                            {name == "manage" && "Manage"}
                            {name == "manage2" && "Manage"}
                            {name == "manage3" && "Manage"}
                        </b>
                    </div>
                    <div className='optinal' >
                        <span className='btn-logout' onClick={() => handleLogout()} title='Đăng xuất'><ExitToAppIcon /></span>
                        <span className="Profile" title='Trang cá nhân'><InfoIcon /></span>
                    </div>
                </div>
                {name == "user" ?
                    <StyledList >
                        <ListItemButton
                            selected={selectedIndex === STATUS_All.ONE}
                            onClick={() => { handleListItemClick(STATUS_All.ONE); navigate("/manageuser/1") }}
                        >
                            <ListItemIcon>
                                <PersonAddAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Thêm mới nhân viên" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === STATUS_All.TWO}
                            onClick={() => { handleListItemClick(STATUS_All.TWO); navigate("/manageuser/2") }}
                        >
                            <ListItemIcon>
                                <ManageAccountsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Quản lý nhân viên" />
                        </ListItemButton>


                        <ListItemButton
                            selected={selectedIndex === STATUS_All.THREE}
                            onClick={() => { handleListItemClick(STATUS_All.THREE); navigate("/manageuser/3") }}
                        >
                            <ListItemIcon>
                                <PersonRemoveIcon />
                            </ListItemIcon>
                            <ListItemText primary="Kết thúc" />
                        </ListItemButton>

                    </StyledList>
                    :
                    <StyledList >
                        <ListItemButton
                            selected={selectedIndex === STATUS_All.ONE}
                            onClick={() => { handleListItemClick(STATUS_All.ONE); navigate("/manageuser/1") }}
                        >
                            <ListItemIcon>
                                <KeyboardAltIcon />
                            </ListItemIcon>
                            <ListItemText primary="Chờ duyệt" />
                        </ListItemButton>
                        <ListItemButton
                            selected={selectedIndex === STATUS_All.TWO}
                            onClick={() => { handleListItemClick(STATUS_All.TWO); navigate("/manageuser/2") }}
                        >
                            <ListItemIcon>
                                <CheckCircleIcon />
                            </ListItemIcon>
                            <ListItemText primary="Đã duyệt" />
                        </ListItemButton>
                    </StyledList>
                }
            </Drawer>
        </div>
    )

}

export default Sidebar