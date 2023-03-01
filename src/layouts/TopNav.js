import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { BubbleChart, Fac, Face, FaceeFace } from '@mui/icons-material';

// justifyContent: 'center',
// justifyItems: 'center',
// alignContent: 'center',
// alignItems: 'center',

const pages = ['Profile', 'Projects', 'Connect'];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function TopNav() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar sx={{ position: 'static', backgroundColor: '#000', }}>

            <Box sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'space-between',
                mx: '20vh',
            }}>

                <Box sx={{ display: 'flex', alignItems: 'center' }}>


                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            fontFamily: 'Delius Swash Caps',
                            // fontWeight: 700,
                            // letterSpacing: '.2rem',
                            fontSize: '2rem',
                            color: 'inherit',
                            textDecoration: 'none',

                            backgroundImage: 'linear-gradient(45deg, #9D88B2, #af4261)',
                            backgroundSize: '100%',
                            WebkitTextFillColor: 'transparent',
                            WebkitBackgroundClip: 'text',
                        }}
                    >
                        Paulina
                    </Typography>

                </Box>

                <Box sx={{
                    display: {
                        xs: 'none', md: 'flex'
                    },

                }}>

                    {pages.map((page) => (
                        <Button
                            key={page}
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block', fontFamily: 'Blinker', fontSize: '1.2rem', }}
                        >
                            <h5>
                                {page}
                            </h5>
                        </Button>
                    ))}
                </Box>
            </Box>

            <React.Fragment>

                {/* <Toolbar disableGutters> */}

               

                <Container sx={{
                    display: { xs: 'flex', md: 'none' },
                    justifyItems: { xs: 'space-around' },
                    alignItems: { xs: 'space-around' },
                }}>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
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
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>


                    <Box sx={{
                        // display: { xs: 'flex', md: 'none' },
                        // justifyItems: { xs: 'space-around' },
                        // alignItems: { xs: 'space-around' },
                    }}>

                        {/* <AdbIcon
                        sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} 
                        /> */}

                        <Face sx={{ mt: '2px', mr: 1 }} />

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href=""
                            sx={{
                                mr: 2,
                                // display: { xs: 'flex', md: 'none' },
                                // flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',


                            }}
                        >
                            PAULINA
                        </Typography>
                    </Box>






                </Container>


                {/* </Toolbar> */}
            </React.Fragment>
        </AppBar>
    );
}
export default TopNav;
