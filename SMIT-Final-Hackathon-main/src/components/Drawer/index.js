import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import logo from "../../assets/images/logo.png"
import "./css/style.css"
import LocalMall from '@mui/icons-material/LocalMall';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import Slider from "../Slider"
import InputText from "../Input"
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
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
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Catergory() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar className="myBar" position="static" open={open}>
                <Toolbar className="myTool">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Catergories
                    </Typography>
                    <div className="searchMain">
                        <InputText placeholder="Search" type="search" btnType="submit" />
                    </div>
                </Toolbar>
                {/* <Slider /> */}
            </AppBar>
            <Drawer
                sx={{
                    width: 0,
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
                <DrawerHeader className="d_Header">
                    <img className="dLogo" src={logo} alt="" />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider className="navMenu1" />
                <List className="navMenu1">
                    <ListItem button key={"Cart"}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Cart"} />
                    </ListItem>
                    <ListItem button key={"Sign In"}>
                        <ListItemIcon>
                            <LocationCityIcon />
                        </ListItemIcon>
                        <ListItemText primary={"Sign In"} />
                    </ListItem>
                </List>
                <Divider className="searchD" />
                <div className="searchD">
                        <InputText placeholder="Search" type="search" btnType="submit" />
                    </div>
                <Divider className="navMenu" />
                <List className="navMenu">
                    <div className="sideBtn">
                        <ListItem button key={"Products"}>
                            <ListItemIcon >
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Products"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Project Management"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Project Management"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Deals"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Deals"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Membership"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Membership"} />
                        </ListItem>
                    </div>
                </List>
                <Divider />
                <List>
                    <div className="sideBtn">
                        <ListItem button key={"Construction Tools"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Construction Tools"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Building Materials"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Building Materials"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Electric"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Electric"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Paint"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Paint"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Bathroom"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Bathroom"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Wallpapers"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Wallpapers"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Kitchen"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Kitchen"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Lighting"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Lighting"} />
                        </ListItem>
                    </div>
                    <div className="sideBtn">
                        <ListItem button key={"Hardware"}>
                            <ListItemIcon>
                                <LocationCityIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Hardware"} />
                        </ListItem>
                    </div>
                </List>

            </Drawer>
            <Main open={open}>
                <DrawerHeader />
            </Main>
        </Box>

    );
}
