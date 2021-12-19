import { Navbar, Container, Nav } from "react-bootstrap";
import "./css/style.css"
import Logo from "../../assets/images/logo.png"
import { Link, useHistory } from 'react-router-dom'
import { auth, signOut } from "../../confiq/Firebase";
import { useState } from "react";
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
// import { Orders } from "../../containers";
import { Footer } from "..";
const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    minHeight: '82px',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
}));



function NavBar({ children, user }) {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    let logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log(auth.currentUser)
            history.push('/')
        }).catch((error) => {
            console.log(error)
            // An error happened.
        });
    }
    const history = useHistory();
    return (
        <>
            <Navbar className="navBar">
                <Container fluid>
                    <Navbar.Brand href="#home" className="logo" ><img className="img" src={Logo} alt="" /></Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar >
                        <Nav>

                            <div className={open ? "mr-100" : "my_menu"}>
                                <Link className="menuItem1" to="/">Users</Link>
                                <Link className="menuItem1" to="/pendingrequest">Pending Requests</Link>
                                <Link className="menuItem1" to="/catergories">Approve Requests</Link>
                                {auth.currentUser ? <button className="menuItem2" onClick={() => logOut()} >
                                    Log Out
                                </button> :
                                    null}
                            </div>
                            {auth.currentUser ?
                                <IconButton
                                    color="inherit"
                                    aria-label="open drawer"
                                    onClick={handleDrawerOpen}
                                    edge="start"
                                    sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                >
                                </IconButton>
                                :
                                <div className="sideMenu">
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        onClick={handleDrawerOpen}
                                        edge="start"
                                        sx={{ mr: 2, ...(open && { display: 'none' }) }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </div>}
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
                                anchor="right"
                                open={open}
                            >{auth.currentUser ?
                                <>
                                    <DrawerHeader>
                                        <IconButton onClick={handleDrawerClose}>
                                            {theme.direction === 'ltr' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                                        </IconButton>
                                        <h5>{user}</h5>
                                    </DrawerHeader>
                                    <Divider />

                                    <div className="sideBtn">
                                        <ListItem button>
                                            <ListItemText>
                                                <Link className="our_Link" to="/dashboard">DashBoard</Link>
                                            </ListItemText>
                                        </ListItem>
                                    </div>
                                    
                                    <div className="sideBtn">
                                        <ListItem button onClick={() => { history.push("/orderhistory") }}>
                                            <ListItemText>
                                                <span className="our_Link">Order History</span>
                                            </ListItemText>
                                        </ListItem>
                                    </div>
                                    <div className="sideBtn">
                                        <ListItem button onClick={() => { history.push("/contact") }}>
                                            <ListItemText>
                                                <span className="our_Link">Contact Us</span>
                                            </ListItemText>
                                        </ListItem>
                                    </div>
                                    <div className="sideBtn">
                                        <ListItem button onClick={() => logOut()}>
                                            <ListItemText>
                                                <span className="our_Link">Log Out</span>
                                            </ListItemText>
                                        </ListItem>
                                    </div>
                                </> :
                                null

                                }
                            </Drawer>
                        </Nav>
                    </Navbar>
                </Container>
            </Navbar>
            <div className="content_Body">
                {children}
            </div>
        </>
    )
}

export default NavBar;