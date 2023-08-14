
import "./Navbar.css"
import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { styled } from '@mui/material/styles';
import {

    Link, useNavigate
}

    from "react-router-dom";

import Modal from '../Modal';
import Cart from '../screen/Cart';
import { useCart } from './ContextReduver';

const settings = ['Logout'];
const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));
const StyleBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        right: -3,
        top: 13,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: '0 4px',
    },
}));
function Navbar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };


    let data = useCart();
    const [cartView, setcartView] = useState(false)
    const navigate = useNavigate()
    // now the logic is that for logout we have to remove auth token from local storage 
    const handleLogout = () => {
        localStorage.removeItem("authToken");
        navigate("/login")
    }


    return (

        <AppBar className='bar' position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography className='logo'
                        variant="h6"
                        noWrap
                        component={Link}
                        to="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        <h2 className="navbar-brand" >U-Food</h2>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >

                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >

                            <MenuItem className='menues' onClick={handleCloseNavMenu}>


                                <Link className='typ' to="/"> <Typography className="homes" textAlign="center">HOME </Typography> </Link>


                            </MenuItem>

                        </Menu>
                    </Box>

                    <Typography className='logosty'
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'yellow',
                            textDecoration: 'none',
                        }}
                    >
                        U-FOOD
                    </Typography>
                    <Box sx={{ fontSize: "20px", flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>


                        <Link className='typ' to="/">Home</Link>

                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <>


                            {(localStorage.getItem("authToken") && localStorage.getItem("userEmail")) ?
                                <>
                                    <div className='mycartty'>
                                        <div className="btn btn-white text-success" onClick={() => { setcartView(true) }}>

                                            <Typography className="homes">    MY CART
                                                <IconButton color="primary" aria-label="cart">
                                                    <StyleBadge badgeContent={data.length} color="success">
                                                        <ShoppingCartIcon />
                                                    </StyleBadge>
                                                </IconButton>
                                            </Typography>
                                        </div>
                                        {cartView ? <Modal onClose={() => setcartView(false)} ><Cart /></Modal> : null}

                                    </div>
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Tooltip title="Open settings">
                                            <div>


                                                <div className='badg'>
                                                    <StyledBadge
                                                        className="brok"
                                                        overlap="circular"
                                                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                                        variant="dot"
                                                    >
                                                        <Avatar src="/broken-image.jpg" />
                                                    </StyledBadge>
                                                    <h5>{localStorage.getItem("userEmail").split('@')[0]}</h5>

                                                </div>

                                            </div>
                                        </Tooltip>
                                    </IconButton>
                                </>
                                : <div className='d-flex'>

                                    <Link className="btn btn-white text-success" aria-current="page" to="/Login">LOGIN </Link>

                                    <Link className="btn btn-white text-success" aria-current="page" to="/Createuser">SIGNUP </Link>


                                </div>
                            }




                        </>

                        <Menu className='dropp'
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem className='menue' key={setting} onClick={handleCloseUserMenu}>
                                    <Button variant="outlined" style={{ marginBottom: "10px " }}>  <Link className="types" to="/myOrder"> MY ORDERS </Link > </Button>

                                    <Button variant="outlined" className='types' onClick={handleLogout}>  <Typography textAlign="center">Logout</Typography></Button>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );

}

export default Navbar

